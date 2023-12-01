const widthOutput = document.querySelector("#width");

function updateSize() {
    widthOutput.textContent = window.innerWidth;
    let innerWidth;
    if (innerWidth === "100.27px") {
        widthOutput.style.backgroundColor = "blue";
    } else {
        widthOutput.style.backgroundColor = "red";
    }
  }
  
updateSize();
window.addEventListener("resize", updateSize);