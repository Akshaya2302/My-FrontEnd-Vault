alert("Hello world!");

console.log("Hey I am Console");

var a = prompt("Enter Your Number");
var isTrue = confirm(
  "Are you sure you want to leave this page and burn ur computer",
);

if (isTrue) {
  console.log("Computer is blasting");
} else {
  console.log("Computer is not blasting");
}
console.log("Your number is " + a);

document.title = "hey im good";
// document.body.style.backgroundColor = "red";
