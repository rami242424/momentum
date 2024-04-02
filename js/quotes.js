// Math.random : 0-1 사이의 랜덤숫자 (소숫점숫자들)
const quotes = [
    {
    quote: "Life has no limitations, except the ones you make.",
    author: "Les Brown",
    },
    {
    quote: "Life is a lively process of becoming.",
    author: "Gen. Douglas MacArthur",
    },
    {
    quote:
    "Life is what happens while you are busy making other plans.",
    author: "John Lennon",
    },
    {
    quote: "All great changes are preceded by chaos.",
    author: "Deepak Chopra",
    },
    {
    quote: "Change alone is eternal, perpetual, immortal",
    author: "Arthur Shopenhauer",
    },
    {
    quote: "By changing nothing, nothing changes.",
    author: "Tony Robbins",
    },
    {
    quote: "Change is inevitable. Growth is optional.",
    author: "John C. Maxwell",
    },
    {
    quote: "Change your thinking, change your life.",
    author: "Ernest Holmes",
    },
    {
    quote: "Failure is not fatal, but failure to change might be.",
    author: "John Wooden",
    },
    {
    quote: "Nothing is forever except change.",
    author: "Buddha",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[0]); // 첫번째 명언
// console.log(quotes[quotes.length - 1]); // 마지막 명언
// console.log(quotes[Math.random(quotes.length - 1) * (quotes.length - 1) ]); // 나의 오답
// console.log(quotes[Math.floor(Math.random() * quotes.length)]);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;