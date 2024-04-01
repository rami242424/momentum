const title = document.querySelector(".hello h1");


function handleTitleClick(){
    // console.log("title was clicked!");
    title.style.color = "red";
}

function handleMouseEnter(){
    title.innerText = "mouse is here";
}

function handleMouseLeave(){
    title.innerText = "mouse is gone";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!!");
}


title.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick;
title.addEventListener("mouseenter", handleMouseEnter);
// title.onmouseenter = handleMouseEnter;
title.addEventListener("mouseleave", handleMouseLeave);
// title.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);