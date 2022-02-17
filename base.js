let string = "i'am Raed Jaidi";
let number = 26;
let boolean = true;
let array = ["i'", "am", "raed"];

let object = {
  fullname: "raedjaidi",
  old: "25",
};
console.log(typeof array);

let home; //undefined
let school = null;

let x = 2;
let y = 5;

if (x > y) console.log(" x est sup");
else console.log("y est sup");

//ternel function
x == y ? console.log("true") : console.log("false");
//les fonctions
function display() {
  console.log("yes!");
}
display();

const faireUneTache = (tache) => {
  console.log("je fais:" + "" + tache);
};

faireUneTache("le calcul");

function calc(x, y) {
  return x + y;
}
//function anonyme
(function maFonction() {
  console.log("hello");
})();

(() => {
  console.log("hello");
})();
