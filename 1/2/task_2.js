function taskTwo() {
	const monthNumber = document.getElementById("task2-input").value
	let output;
	switch (monthNumber) {
		case "1":
			output = "Январь";
			break;
		case "2":
			output = "Февраль";
			break;
		case "3":
			output = "Март";
			break;
		case "4":
			output = "Апрель";
			break;
		case "5":
			output = "Май";
			break;
		case "6":
			output = "Июнь";
			break;
		case "7":
			output = "Июль";
			break;
		case "8":
			output = "Август";
			break;
		case "9":
			output = "Сентябрь";
			break;
		case "10":
			output = "Октябрь";
			break;
		case "11":
			output = "Ноябрь";
			break;
		case "12":
			output = "Декабрь";
			break;
		default:
			output = "Некорректный номер месяца";
	}
	document.getElementById("task2-output").innerHTML = output
}