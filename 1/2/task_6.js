function taskSix() {
	let input = document.getElementById("task6-input").value
	const clean = input.toLowerCase().replace(/\s/g, '')
	const reversed = clean.split('').reverse().join('')
	if (clean == reversed) {
		document.getElementById("task6-output").innerHTML = "Да"
	} else {
		document.getElementById("task6-output").innerHTML = "Нет"
	}
}
