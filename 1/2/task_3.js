function isPrime(num) {
	for (let i = 2; i <= num ** 0.5; ++i) {
		if (num % i == 0) {
			return false
		}
	}
	return true
}

function* primeGenerator(genSize) { // обозначение генератора
	let num = 2
	while (genSize > 0) {
		if (isPrime(num)) {
			--genSize
			yield num
		}
		++num
	}
}

function taskThree() {
	let n = Number(document.getElementById("task3-input").value)
	let outputList = []
	const gen = primeGenerator(n);
	for (let outValue of gen) {
		outputList.push(outValue)
	}
	document.getElementById("task3-output").innerHTML = outputList.join(' ')
}