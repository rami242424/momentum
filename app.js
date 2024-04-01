const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    // console.log(h1.style.color); // getter
    // h1.style.color = "blue"; // setter
    // console.log(h1.style.color); // getter
    // ---------------------
 
    const currentColor = h1.style.color;
    let newColor;

    if(currentColor === "blue") { /// === 일치함을 확인하는 용도
        newColor = "tomato"; // = 수정
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);