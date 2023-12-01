const widthOutput = document.querySelector("#width");

function updateSize() {
    const containerWidth  = window.innerWidth;
    
    if (containerWidth === 552) {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "red";
    }
  }
  
  window.addEventListener("resize", updateSize);
  updateSize();


// function handleWindowResize(){
//     if 
//     document.body.style.backgroundColor = "tomato";
// }

// window.addEventListener("resize", handleWindowResize);