// let time = 2000,
//     currentImageIndex = 0,
//     images = document
//                 .querySelectorAll(".carousel-item img")
//     max = images.length;

// function nextImage() {
//     images[currentImageIndex]
//         .classList.remove("on")

//     currentImageIndex++

//     if(currentImageIndex >= max)
//         currentImageIndex = 0

//     images[currentImageIndex]
//         .classList.add("on")
// }

// function start() {
//     setInterval(() => {
//         // troca de imagem
//     }, time)
// }

// window.addEventListener("load", start)

let time = 2000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll(".carousel-item img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("on")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("on")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)