const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    console.log("title was clicked!");
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "mouse is here";
}

function handleMouseLeave(){
    h1.innerText = "mouse is gone";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOD");
}

// 여기서 h1은 HTML element이다
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

// 여기서부터는 window!

window.addEventListener("resize", handleWindowResize);

window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);