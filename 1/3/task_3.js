function task3(...numbers) {
    let sorted = numbers.sort();
    if (sorted.length == 0) {
        return undefined;
    }
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 
        ? sorted[mid] 
        : (sorted[mid - 1] + sorted[mid]) / 2;
}

let task3_input = [4, 3, 5, 7, 8, 2];
console.log(`Задание 3:\nВвод: ${task3_input}\nВывод1: ${task3(...task3_input)}\nВывод2: ${task3(4, 3, 5, 7, 8, 2)}\n`);