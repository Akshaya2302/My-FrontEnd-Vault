let DogImg = document.getElementById("dog-img");
let DogBtn = document.getElementById("dog-btn");
let DogBreed = document.getElementById("dog-breed");

async function fetchDog() {
  let response = await fetch("https://dog.ceo/api/breeds/image/random");
  let data = await response.json();
  let breedName = data.message.split("/")[4];
  DogBreed.innerText = `Breed Name : ${breedName.toUpperCase()}`;
  DogImg.src = data.message;

  console.log(data);
}
DogBtn.addEventListener("click", fetchDog);

fetchDog();
// JavaScript has a golden rule:
// You CANNOT use await unless the function has async in front of it!
// That’s why await has red squiggly lines right now.
//  learnt about async,await,split in js for strings, json and more things 
