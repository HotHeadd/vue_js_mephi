function task2(list) {
    return list.map(function(elem) {
        return elem % 5;
    });
}

let task2_input = [7, 12, 3, 44, 55];
console.log(`Задание 2:\nВвод: ${task2_input}\nВывод: ${task2(task2_input)}\n`);