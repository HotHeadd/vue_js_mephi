function task1(list) {
	return list.sort()
}

function task2(list) {
	return list.map(function(elem) {
		return elem % 5
	})
}

function task3(...numbers) {
	let sorted = numbers.sort()
	if (sorted.length == 0) {
		return undefined
	}
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 
        ? sorted[mid] 
        : (sorted[mid - 1] + sorted[mid]) / 2;
}

function task4(str) {
    const stack = [];
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return 'Неправильная';
            }
            stack.pop();
        }
    }
    
    return stack.length === 0 ? 'Правильная' : 'Неправильная';
}

function deepCopy(obj) {
	if (obj === null || typeof obj !== 'object') {
        return obj;
    }

	if (Array.isArray(obj)) {
        const newArray = [];
        for (let i = 0; i < obj.length; i++) {
            newArray[i] = deepCopy(obj[i]);
        }
        return newArray;
    }

	const newObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepCopy(obj[key]);
        }
    }
    return newObj;
}

let task1_input = [3, 2, 4, 5, 1]
let task2_input = [7, 12, 3, 44, 55]
let task3_input = [4, 3, 5, 7, 8, 2]


const original = {
    name: 'Ivan',
    age: 25,
    hobbies: ['чтение', 'спорт'],
    address: {
        city: 'Москва',
        street: 'Ленина'
    },
    scores: [100, 95, [98, 97]]
};

console.log(`Задание 1:\nВвод: ${task1_input}\nВывод: ${task1(task1_input)}\n`)
console.log(`Задание 2:\nВвод: ${task2_input}\nВывод: ${task2(task2_input)}\n`)
console.log(`Задание 3:\nВвод: ${task3_input}\nВывод1: ${task3(...task3_input)}\nВывод2: ${task3(4, 3, 5, 7, 8, 2)}\n`)


const copy = deepCopy(original)

console.log(original === copy);
console.log(original.hobbies === copy.hobbies);
console.log(original.address === copy.address);
console.log(original.scores === copy.scores);