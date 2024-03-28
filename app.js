// const h = document.getElementsByTagName("h1");
// console.log(h); // HTMLCollection [h1] (배열값)-> 원하는 값이 아님...
// querySelector 는 element를 CSS 방식으로 검색한다!!

// const h = document.querySelector("h1");
// 또는 
// const h = document.querySelector(".hello h1");
// h1이 여러개 일때 사용하면 첫번째 h1값만 나온다.
// const h = document.querySelector(".hello h1:first-child");

//id로 찾을때(html에 id 정의해줘야함, 지금 class만 정의)
// const h = document.querySelector("#hello");
// const h2 = document.getElementById("hello");

// console.log(h);
// console.log(h2);

const title = document.querySelector(".hello h1");

console.log(title);
title.innerText = "helllo llll"; // 브라우저에 Grap me!-1 으로 출력되었던 것이 helllo llll로 바뀜