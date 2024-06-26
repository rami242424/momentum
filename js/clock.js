// padStart, padEnd는 string과 사용가능

const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    // clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    // const hours = date.getHours(); // 자체로는 number라서 padStart 쓸 수 없다.
    const hours = String(date.getHours()).padStart(2, "0");
    const mins = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${mins}:${sec}`;
}

// setInterval(sayHello, 1000); // 설정한 매 초마다 반복
// setTimeout(sayHello, 1000); // 설정한 초 후에 한번 실행

getClock(); // 이 코드가 없으면 1초 뒤부터 시간이 업데이트 된다.
setInterval(getClock, 1000);