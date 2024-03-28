const h1 = document.querySelector("div.hello:first-child h1");


function handleTitleClick(){
    // console.log("title was clicked");
    h1.style.color = "red";
}

function handleMouseEnter(){
    h1.innerText ="Mouse is here";
}

function handleMouseLeave(){
    h1.innerText ="Mouse is gone";
}

function handleWindowResize(){
    document.body.style.background = "tomato";
}

function handleWindowCopy(){
    alert("copier!!");
}

h1.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick
h1.addEventListener("mouseenter", handleMouseEnter);
// title.onmouseenter = handleMouseEnter
h1.addEventListener("mouseleave", handleMouseLeave);
// title.onmouseleave = handleMouseLeave

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);