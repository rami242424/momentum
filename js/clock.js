// interval 매번 일어나야하는 무언가
// setTimeout 정해진 시간에 한번만 실행
// new Date (콘솔창) : 오늘 날짜 요일 시간 등등

const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// setInterval(sayHello, 5000); // argument : 호출하려는 함수, 호출할 시간
// setTimeout(sayHello, 5000); // argument : 호출하려는 함수, 얼마나 기다릴 건지 시간(ms)

getClock(); // 즉시호출(딜레이 없이 바로 시간로딩)
setInterval(getClock, 1000); // 이것만 입력하면, 페이지가 로딩되고 1초뒤부터 시간이 보여진다.