/*
ссылки на свиней
https://shorturl.at/xvo8U,https://shorturl.at/vxWBQ,https://shorturl.at/7ZSSa,https://shorturl.at/avwAB,https://shorturl.at/n2FFn
*/

// ЗАДАНИЕ 2
let links = 
    prompt("Промпт для второго задания", "введите ссылки на картинки, через запятую")
    .split(',').map(s => s.trim())

let promises = []
for (let link of links) {
    promises.push(new Promise(
        function(resolve, reject){
            let image = new Image()
            image.src = link
            image.onload = () => resolve(image)
            image.onerror = () => reject(new Error("Can’t load image"))
        }
    ))
}

let containerTwo = document.getElementById('task2-images');
let containerThree = document.getElementById('task3-images');

Promise.allSettled(promises).then((results) =>
    results.forEach((result) => {
        let element;
        if (result.status === "fulfilled") {
            element = result.value
            element.style.width = "300px"
            element.style.height = "300px"
        } else {
            element = document.createElement("p");
            par_text = document.createTextNode("Can’t load image");
            element.appendChild(par_text);
        }
        containerTwo.appendChild(element);
    }),
);

// ЗАДАНИЕ 3
links.forEach(link => {
    let promise = new Promise((resolve, reject) => {
        let image = new Image();
        image.src = link;
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error("Can’t load image"));
    });

    promise
        .then(image => {
            image.style.width = "300px";
            image.style.height = "300px";
            containerThree.appendChild(image);
        })
        .catch(() => {
            let p = document.createElement("p");
            p.textContent = "Can’t load image";
            containerThree.appendChild(p);
        });
});