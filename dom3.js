console.log("Akshu");
// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "red";
// document.getElementById("redbox").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "powderblue";
console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach((e) => {
  //   console.log(e);
  e.style.backgroundColor = "powderblue";
});
