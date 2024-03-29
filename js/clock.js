// interval 매번 일어나야하는 무언가
// setTimeout 정해진 시간에 한번만 실행
// new Date (콘솔창) : 오늘 날짜 요일 시간 등등

const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const mins = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${mins}:${sec}`;
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}


getClock(); 
setInterval(getClock, 1000); 