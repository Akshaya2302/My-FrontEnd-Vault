function nice(name) {
  //name(paras)
  console.log("Hey " + name + " This is Akshaya");
  console.log("Hey " + name + " Akshaya is cute");
  console.log("Hey " + name + " Akshaya");
  console.log("Hey " + name + " Helloooo Akshaya");
}

function sum(a, b, c = 3) {
  // here c=3 is a default value
  //   console.log(a + b);
  return a + b + c;
}
result1 = sum(3, 2);
//  NaN means not a number coz we just used (3) and we didn't pass the value of b
result2 = sum(7, 5);
result3 = sum(3, 13, 1);

console.log("The sum of these numbers is: ", result1);
console.log("The sum of these numbers is: ", result2);
console.log("The sum of these numbers is: ", result3);

// arrow funtion

const func1 = (a) =>
  // func1 is a variable here we can even use functions using by assigning them as variable
  {
    console.log("Iam an arrow function", a);
  };

func1(34);
func1(23);
func1(10);
