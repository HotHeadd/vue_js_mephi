/*
ссылки на свиней
https://shorturl.at/xvo8U,https://shorturl.at/vxWBQ,https://shorturl.at/7ZSSa,https://shorturl.at/avwAB,https://shorturl.at/n2FFn

без забаганной
https://shorturl.at/xvo8U,https://shorturl.at/vxWBQ,https://shorturl.at/7ZSSa,https://shorturl.at/avwAB,https://shorturl.at/aNcGo
*/

// ЗАДАНИЕ 2
let links = 
    prompt("Промпт для задания", "введите ссылки на картинки, через запятую")
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

// ЗАДАНИЕ 4

function loadImage(link) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = link;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error("Load failed"));
    });
}

// ЗАДАНИЕ 4.1
async function loadImagesOrdered(links, container) {
    const promises = links.map(async (link, index) => {
        try {
            const img = await loadImage(link);
            return { index, success: true, img };
        } catch {
            return { index, success: false };
        }
    });
    const results = await Promise.all(promises);
    results
        .sort((a, b) => a.index - b.index)
        .forEach(result => {
            if (result.success) {
                result.img.style.width = "300px";
                result.img.style.height = "300px";
                container.appendChild(result.img);
            } else {
                const p = document.createElement("p");
                p.textContent = "Can't load image";
                container.appendChild(p);
            }
        });
}

// ЗАДАНИЕ 4.2
async function loadImagesUnordered(links, container) {
    const promises = links.map(async (link) => {
        try {
            const img = await loadImage(link);
            img.style.width = "300px";
            img.style.height = "300px";
            container.appendChild(img);
        } catch {
            const p = document.createElement("p");
            p.textContent = "Can't load image";
            container.appendChild(p);
        }
    });
    await Promise.all(promises);
}

let containerFourOne = document.getElementById('task4-1-images');
let containerFourTwo = document.getElementById('task4-2-images');

loadImagesOrdered(links, containerFourOne);
loadImagesUnordered(links, containerFourTwo);