function getClock(){
    const date = new Date();
    // clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    // const hours = date.getHours(); // 자체로는 number라서 padStart 쓸 수 없다.
    const hours = String(date.getHours()).padStart(2, "0");
    const mins = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${mins}:${sec}`;
}