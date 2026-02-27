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

let task4_input = "(())()()";
console.log(`Задание 4:\nВвод: ${task4_input}\nВывод: ${task4(task4_input)}\n`);