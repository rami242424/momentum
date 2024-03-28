// css를 사용하여 글자색을 바꿔주고, 자바스크립트를 이용하여 className을 토글식으로 만들수있다.

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    // h1.className = "active";
    // console.log(h1.className);
    const clickedClass = "clicked sexy-font";
    if (h1.className === clickedClass){
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);
