function updateSize() {
    const containerWidth = window.innerWidth;
    const bodyClassList = document.body.classList;

    // 기존에 설정된 모든 배경색 클래스 제거
    bodyClassList.remove('blue-background', 'red-background', 'green-background');

    if (containerWidth <= 400) {
        bodyClassList.add('blue-background');
    } else if (containerWidth <= 600) {
        bodyClassList.add('red-background');
    } else {
        bodyClassList.add('green-background');
    }
}

window.addEventListener("resize", updateSize);
updateSize(); // 페이지 로드 시에도 함수를 호출하여 초기 배경색 설정
