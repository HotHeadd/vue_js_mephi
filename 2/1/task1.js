let count = sessionStorage.getItem("count")

if (count === null) {
    count = 0
} else {
    count = Number(count)
}

count++
sessionStorage.setItem("count", count)
document.getElementById("task1-block").innerHTML = count