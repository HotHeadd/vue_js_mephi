type CompareFn<T> = (a: T, b: T) => number;

class TreeNode<T> {
  	constructor(
    	public value: T,
		public left: TreeNode<T> | null = null,
		public right: TreeNode<T> | null = null
  	) {}
}

class BinarySearchTree<T> {
	private root: TreeNode<T> | null = null;
	private readonly compareFn: CompareFn<T>;

  	constructor(compareFn: CompareFn<T>) {
    	this.compareFn = compareFn;
  	}

  	public insert(value: T): void {
		if (this.root === null) {
			this.root = new TreeNode(value);
			return;
		}
		this.insertRec(this.root, value);
	}

	private insertRec(node: TreeNode<T>, value: T): void {
		const cmp = this.compareFn(value, node.value);
		if (cmp < 0) {
			if (node.left === null) {
				node.left = new TreeNode(value);
			} else {
				this.insertRec(node.left, value);
			}
		} else if (cmp > 0) {
			if (node.right === null) {
				node.right = new TreeNode(value);
			} else {
				this.insertRec(node.right, value);
			}
		}
	}

	public find(value: T): T | null {
		return this.findRec(this.root, value);
	}

	private findRec(node: TreeNode<T> | null, value: T): T | null {
		if (node === null) return null;

		const cmp = this.compareFn(value, node.value);
		if (cmp === 0) return node.value;
		if (cmp < 0) return this.findRec(node.left, value);
		return this.findRec(node.right, value);
	}

	public remove(value: T): boolean {
		const { newRoot, deleted } = this.removeRec(this.root, value);
		this.root = newRoot;
		return deleted;
	}

	private removeRec(
		node: TreeNode<T> | null,
		value: T
	): { newRoot: TreeNode<T> | null; deleted: boolean } {
		if (node === null) {
			return { newRoot: null, deleted: false };
		}

		const cmp = this.compareFn(value, node.value);

		if (cmp < 0) {
			const result = this.removeRec(node.left, value);
			node.left = result.newRoot;
			return { newRoot: node, deleted: result.deleted };
		}

		if (cmp > 0) {
			const result = this.removeRec(node.right, value);
			node.right = result.newRoot;
			return { newRoot: node, deleted: result.deleted };
		}

		if (node.left === null) return { newRoot: node.right, deleted: true };
		if (node.right === null) return { newRoot: node.left, deleted: true };

		const successor = this.findMin(node.right);
		node.value = successor.value;
		const { newRoot } = this.removeRec(node.right, successor.value);
		node.right = newRoot;

		return { newRoot: node, deleted: true };
	}

	private findMin(node: TreeNode<T>): TreeNode<T> {
		let current: TreeNode<T> = node;
		while (current.left !== null) {
			current = current.left;
		}
		return current;
	}

	public update(oldValue: T, newValue: T): boolean {
		if (this.remove(oldValue)) {
		this.insert(newValue);
			return true;
		}
		return false;
	}

	public height(): number {
		return this.calcHeight(this.root);
	}

	private calcHeight(node: TreeNode<T> | null): number {
		if (node === null) return 0;
		const leftH = this.calcHeight(node.left);
		const rightH = this.calcHeight(node.right);
		return Math.max(leftH, rightH) + 1;
	}
	}

const bst = new BinarySearchTree<number>((a, b) => a - b);

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.find(7));
console.log(bst.find(99));
console.log(bst.height());

bst.update(10, 12);
console.log(bst.find(10));
console.log(bst.find(12));

bst.remove(5);
console.log(bst.height());