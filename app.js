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

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);