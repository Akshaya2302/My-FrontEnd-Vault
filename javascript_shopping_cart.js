let text = document.getElementById("items");
let btn = document.getElementById("add-btn");
let listItems = document.getElementById("list");

btn.addEventListener("click", () => {
  //   console.log("CLicked");
  //   let Total_items = text.value;
  let newItem = document.createElement("li");
  newItem.innerHTML = text.value;
  text.value = "";

  listItems.appendChild(newItem);
});
