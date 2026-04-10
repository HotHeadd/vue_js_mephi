type Point = {
  x: number;
  y: number;
};

function distance(x1: number, y1: number, x2: number, y2: number): number;
function distance(p1: Point, p2: Point): number;

function distance(
  a: number | Point,
  b: number | Point,
  c?: number,
  d?: number
): number {
  if (
    typeof a === 'number' &&
    typeof b === 'number' &&
    typeof c === 'number' &&
    typeof d === 'number'
  ) {
    return Math.hypot(c - a, d - b);
  }

  return Math.hypot(b.x - a.x, b.y - a.y);
}

console.log(distance(0, 0, 3, 4))

const p1: Point = { x: 1, y: 1 };
const p2: Point = { x: 4, y: 5 };

console.log(distance(p1, p2))