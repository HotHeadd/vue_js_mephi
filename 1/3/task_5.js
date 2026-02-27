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

const copy = deepCopy(original);

console.log(`Задание 5:`);
console.log(original === copy);
console.log(original.hobbies === copy.hobbies);
console.log(original.address === copy.address);
console.log(original.scores === copy.scores);