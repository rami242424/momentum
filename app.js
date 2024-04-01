const title = document.querySelector(".hello h1");


function handleTitleClick(){
    // console.log("title was clicked!");
    title.style.color = "red";
}

title.addEventListener("click", handleTitleClick);