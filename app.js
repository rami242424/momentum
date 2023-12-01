const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    // const clickedClass = "clicked"; 
    // toggle로 클래스를 한번만 사용하기 때문에 정의할 필요가 없다.
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
