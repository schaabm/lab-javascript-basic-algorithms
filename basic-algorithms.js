// Names and Input
let hacker1 = "Captain Future";
console.log("The driver's name is: " + hacker1);

let hacker2 = prompt("Name of the navigator:");

console.log("The navigator's name is: " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log(
    "The Driver has the longest name, it has " + hacker1.length + " characters"
  );
} else if (hacker1.length < hacker2.lenght) {
  console.log(
    "Yo, navigator got the longest name, it has" +
      hacker2.length +
      " characters"
  );
} else {
  console.log(
    "wow, you both got equally long names, " + hacker1.length + " characters!!"
  );
}

let newHacker1 = "";
for (let i = 0; i < hacker1.length; i++) {
  let tmp = hacker1[i] + " ";
  newHacker1 += tmp.toUpperCase();
}

console.log(newHacker1);

console.log("Reverse the navigator");

console.log(
  hacker2
    .split("")
    .reverse()
    .join("")
);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

//Conditionals

// Lorem ipsum generator
