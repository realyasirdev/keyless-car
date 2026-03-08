// Step 1: User se age lena
let age = Number(prompt("Enter your age:"));


// Step 2: Age check karna
if (age < 18) {

  // Step 3: Agar 18 se choti ho
  alert("Sorry, you are too young to drive this car. Powering off");

} else if (age === 18) {

  // Step 4: Agar age 18 ho
  alert("Congratulations on your first year of driving. Enjoy the ride!");

} else {

  // Step 5: Agar age 18 se zyada ho
  alert("Powering On. Enjoy the ride!");
}
