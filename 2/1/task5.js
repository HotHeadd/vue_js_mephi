/* 
тестовые айпишки
176.124.35.49,188.121.146.79,162.158.172.34,45.66.77.224,203.205.167.86
ru, ir, pl, ne, cn

85.90.207.2,91.218.181.251,91.103.251.207,92.43.143.44,95.140.205.242
армяне
*/
async function taskFive() {
    let ips = document.getElementById("task5-input").value.split(',').map(s => s.trim())
	let result = true
    for (let ip of ips) {
        let url = "https://json.geoiplookup.io/" + ip
        let response = await fetch(url)
        let json = await response.json()
        if (["Russia", "Belarus", "Afganistan", "Venesuela", "China", "Iran"].includes(json["country_name"])) {
            result = false
			break
        } 
    }
	if (result) {
    	document.getElementById("task5-output").innerHTML = "Welcome to our website!"
	} else {
    	document.getElementById("task5-output").innerHTML = "Our services are not available in your country"
	}
}