// css를 사용하여 글자색을 바꿔주고, 자바스크립트를 이용하여 className을 토글식으로 만들수있다.
// className은 이전 class들을 상관하지 않고, 모든걸 교체해버린다 => 버그 발생, classList 사용으로 버그 수정 (h1.className === clickedClass)=> (h1.classList.contains(clickedClass)로 수정


const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick);
