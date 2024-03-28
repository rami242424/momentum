const h1 = document.querySelector("div.hello:first-child h1");


// function handleTitleClick(){
//     // console.log(h1.style.color);
//     // h1.style.color = "blue";
//     // console.log(h1.style.color);
//     if (h1.style.color === "blue") {
//         h1.style.color = "tomato";
//     } else {
//         h1.style.color = "blue";
//     }
// }

// 위에 식의 중복 없애기
function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;

    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);

// h1.style.color = newColor => The first one changes the color of h1
// newColor = h1.style.color => The second one saves the color of the h1 in a variable.