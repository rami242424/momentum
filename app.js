const h1 = document.querySelector("div.hello:first-child h1");

// classList : class들의 목록으로 작업할 수 있게 허용해줌
// className : 모든걸 교체해버림(기존것 삭제)
function handleTitleClick(){
    const clickedClass = "clicked";
   if (h1.classList.contains(clickedClass)){
    h1.classList.remove(clickedClass);
   } else {
    h1.classList.add(clickedClass);
   }

}

h1.addEventListener("click", handleTitleClick);