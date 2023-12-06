const clockTitle = document.querySelector(".js-clock");

function getClock() {
  // 오늘 지금 이시간
  const date = new Date();

  // 크리스마스 이브
  const christmasEve = new Date(date.getFullYear(), 11, 24, 0, 0, 0, 0);

  // 남은 시간 = christmasEve - date
  const timeLeft = christmasEve - date;

  const seconds = String(Math.floor(timeLeft / 1000) % 60).padStart(2, "0");
  const minutes = String(Math.floor(timeLeft / (1000 * 60)) % 60).padStart(
    2,
    "0",
  );
  const hours = String(Math.floor(timeLeft / (1000 * 60 * 60)) % 24).padStart(
    2,
    "0",
  );
  const days = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0",
  );

  // 구해야 되는 값 (christmasEve - date)
  const remainingTimeStr = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  clockTitle.innerText = remainingTimeStr;
}

getClock();
setInterval(getClock, 1000);