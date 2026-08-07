let Brand = document.getElementById("car-brand");
let Model = document.getElementById("car-model");
let Button = document.getElementById("add-btn");
let Garage_Container = document.getElementById("garage-container");

Button.addEventListener("click", () => {
  let CarData = {
    brand: Brand.value,
    model: Model.value,
  };
  //   console.log(CarData);
  let newCard = document.createElement("div");
  newCard.classList.add("New-card");
  newCard.innerText = CarData.brand + " " + CarData.model;
  Brand.value = "";
  Model.value = "";
  let sellbtn = document.createElement("button");
  sellbtn.innerText = "Sell Car";
  newCard.appendChild(sellbtn);
  sellbtn.addEventListener("click", () => {
    newCard.remove();
  });
  Garage_Container.appendChild(newCard);
});
