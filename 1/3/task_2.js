function task2(list) {
    for (let a of list) {
        if (typeof a !== "Number" && Number.isInteger(a) && a > 0) {
            return undefined
        }
    }
    return list.map(function(elem) {
        return elem % 5;
    });
}

let task2_input = [7, 12, 3, 44, 55];
console.log(`Задание 2:\nВвод: ${task2_input}\nВывод: ${task2(task2_input)}\n`);