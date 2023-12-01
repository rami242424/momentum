function updateSize() {
    const containerWidth = window.innerWidth;
    
    if (containerWidth === 552) {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "red";
    }
}

window.addEventListener("resize", updateSize);
updateSize(); // 페이지 로드 시에도 함수를 호출하여 초기 배경색 설정
