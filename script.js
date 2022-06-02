"use strict";
const secretNo = Math.trunc(Math.random() * 20) + 1;
//the possible values are 1-20
//math.round returns number b.n 0 and 1
//math.trunc returns integer number by omitting the decimal
console.log(secretNo);

let chance = 5;

// document.querySelector(".chancesLeft").textContent;

const btn = document.querySelector(".check");

btn.addEventListener("click", function () {
  const guessInput = document.querySelector(".guess");
  const guess = Number(document.querySelector(".guess").value);
  const message = document.querySelector(".message");
  document.querySelector(".number").textContent = guess;
  console.log(`U guessed ${guess}`);
  if (!guess) {
    message.textContent = `No Number`;
  } else if (guess < 0 || guess > 20) {
    message.textContent = "Please enter number between 1 and 20";
  } else if (guess == secretNo) {
    message.textContent = "Congrats! You won!";
    document.querySelector(
      ".chancesLeft"
    ).textContent = `You guessed the number with ${5 - chance} chance`;
    guessInput.style.outline = "2px solid green";
    document.body.style.backgroundColor = "pink";
    btn.textContent = "Play again!";
    btn.addEventListener("click", function () {
      window.location.reload();
    });
  } else if (guess > secretNo) {
    message.textContent = "Ooops! Too High";
    guessInput.style.outline = "2px solid red";
    chance--;
    document.querySelector(
      ".chancesLeft"
    ).textContent = `Chances left : ${chance}`;
  } else if (guess < secretNo) {
    message.textContent = "Ooops! Too Low";
    chance--;
    document.querySelector(
      ".chancesLeft"
    ).textContent = `Chances left : ${chance}`;
  }

  if (chance == 0) {
    message.textContent = "Game over! You lost!";
    guessInput.disabled = true;
    document.querySelector(
      ".chancesLeft"
    ).textContent = `Correct answer was ${secretNo}`;
    btn.textContent = "Play again!";
    btn.addEventListener("click", function () {
      window.location.reload();
    });
  }
});

// const bn = document.querySelector(".between");
// // bn.innerText = "Bn 1 and 20";
// // console.log(bn.innerText);
// bn.innerHTML = "<span style = 'color:red; padding:20px'>B/n 1 and 20</span>";

// //querySelector is a single element selector
// //at a tine, it can only select one element

// const myc = document.querySelector(".right p:nth-child(odd)");
// console.log(myc.textContent);

// //nested class
// const nested = document.querySelector(".left .check");
// nested.style.border = "3px solid blue";

// //getelementbyclassname returns html collection
// const coll = document.getElementsByTagName("p");
// console.log(coll);
// console.log(coll[0].textContent);

// let myitems = document.querySelector(".right").getElementsByTagName("p");
// console.log(myitems);

// myitems = Array.from(myitems);
// myitems.forEach((lis, index) => {
//   lis.textContent = `${index} Hello`;
// });

// //to reverse items
// //first convert html collection into arrat
// // myitems = Array.from(myitems);
// myitems.reverse();
// // console.log(myitems);

// //for getElementByClassName and getElementByTagName, the html collection should be converted to array first
// //but for querySelectorAll, we don't need to convert it to array.

//to disble link when clicked

const button = document.querySelector(".link");
button.setAttribute("href", "http://google.com");
// button.removeAttribute

button.addEventListener("click", onclick);

//event target element
function onclick(e) {
  console.log("clicked");
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.innerText);
  console.log(e.target.classList);
  e.target.textContent = "hello";
  e.target.removeAttribute("href");

  //event type
  console.log(e.type);

  //timestamp
  console.log(e.timeStamp);

  //coords event relative to the window (clicking event from the top )
  console.log(e.clientY);

  //coords event relative to the window (clicking event from the left )
  console.log(e.clientX);

  //coords event relative to the element
  console.log(e.offsetX);
  console.log(e.offsetY);
}

//
