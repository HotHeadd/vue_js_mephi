// Задания 1, 3, 4

class User {
	name
	#tel
	#age
	constructor(name, age) {
		this.name = name
		this.#age = age
	}
	
	get tel() {
		return this.#tel
	}
	set tel(value) {
		const regexp = /^\+7\d{10}$/;
		if (regexp.test(value)) {
			this.#tel = value;
		} else {
			throw new Error("Неверный формат телефона");
		}
	}
	get age() {
		return this.#age
	}
	set age(value) {
		if (Number.isInteger(value) && value >= 1 && value <= 100) {
			this.#age = value
		}
		else {
			throw new Error("Неверный возраст");
		}
	}

	hello() {
		console.log(`Hello, my name is ${this.name}. And I am ${this.#age} years old`)
	}
}

// Задание 2
function User2(name, age) {
	this.name = name
	this.age = age
	this.hello = function() {
		console.log(`Hello, my name is ${this.name}. And I am ${this.age} years old`)
	}
}

// Задание 5
class Student extends User {
	#knowledge = 0
	constructor(name, age) {
		super()
	}
	hello() {
		console.log(`Hello, my name is ${this.name}. I am ${this.age} years old. And I am a student!`)
	}
	learn() {
		++this.#knowledge
	}
	get knowledge() {
		return this.#knowledge
	}
}

// Задание 6
Array.prototype.reverse = function(){
	return this.concat(this)
}

// Проверки
console.log("Задания 1-4")
let u = new User("Обычный юзер", 42)
u.hello()
let u2 = new User2("Юзер из фукнции", 78)
u2.hello()
u.tel = "+71231232233"
console.log(`Телефон: ${u.tel}`)
//u.tel = "wrongphone"
u.age = 24
console.log(`Age: `, u.age)
// u.age = 101

console.log("Задание 5")
let u5 = new Student("Андрей", 21)
u5.hello()
console.log("Начальное знание: ", u5.knowledge)
u5.learn()
console.log("Научился, знание: ", u5.knowledge)

console.log("Задание 6")
let arr = [1,2,3,4,5]
console.log(arr.reverse())