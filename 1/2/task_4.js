let Counter = {
	count: 0,
	add: function(value) {
		this.count += value
	},
	sub: function(value) {
		this.count -= value
	}
}
function updateCounterDiv(){
	document.getElementById("task4-output").innerHTML = "Текущее значение счётчика: " + Counter.count
}

updateCounterDiv()

function taskFourAdd() {
	let value = Number(document.getElementById("task4-input").value)
	Counter.add(value)
	updateCounterDiv()
}

function taskFourSub() {
	let value = Number(document.getElementById("task4-input").value)
	Counter.sub(value)
	updateCounterDiv()
}