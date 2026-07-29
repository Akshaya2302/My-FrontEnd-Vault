let button = document.getElementById("btn");
//   alert("Im clicked");
//   list of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("dblclick", () => {
  document.querySelector(".box").innerHTML = "hey ur clicked";
});
button.addEventListener("contextmenu", () => {
  alert("Don't hack us by right click plz");
});
document.addEventListener("keydown", (e) => {
  console.log(e.key);
});
