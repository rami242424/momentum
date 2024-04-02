const images = [
    "1.jpg",
    "2.jpg",
    "22.jpg"
];

const chosenImage = images[Math.round(Math.random() * images.length)];
// console.log(chosenImage);
const bgImg = document.createElement("img");
// console.log(bgImg);

bgImg.src = `img/${chosenImage}`;
// console.log(bgImg);
document.body.appendChild(bgImg);
