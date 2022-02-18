//--------------Methodes string---------------------
let str = "JavaScript est un language orienté objet";

console.log(typeof str);
console.log(eval("1" + "2"));
//console.log(eval(paresInt("1") + 2));
console.log(parseInt("2"));
console.log(isNaN(23)); // is not a null

console.log(str.length);
console.log(str[22]);
console.log(str.indexOf("language"));
console.log(str.indexOf("x")); //return -1 because inconu

let newString = str.slice(2, 10);
console.log(newString);

console.log(str.split("i"));
console.log(str.toLocaleLowerCase());
console.log(str.toUpperCase());
console.log(str.replace("JavaScript", "Python"));

//---------------Methodes number-------------------

let num = 42.1234;
let numString = " 42.12 est un chiffre";
console.log(num.toFixed(2));
console.log(parseInt("33"));
console.log(parseInt(numString));
console.log(parseFloat(numString));

//Math
console.log(Math.PI); // 3.14
console.log(Math.round(4.5)); //5
console.log(Math.floor(3.4)); //3
console.log(Math.ceil(4.1)); //5
console.log(Math.pow(2, 7)); //128
console.log(Math.sqrt(25)); //5
console.log(Math.random() * 50);

//-------------------Methodes arrays----------

let arr1 = ["Js", "Php", "Python"];
let arr2 = ["Ruby", "Vue"];

//let newArr = arr1 + arr2;
//let newArr = arr1.concat(arr2);
let newArr = [...arr1, ...arr2];
console.log(newArr);

console.log(arr1.join("-"));

console.log(arr1.slice(1));
console.log(arr1.slice(2, 3));
console.log(arr1.indexOf("Js"));

arr1.forEach((languages) => console.log(languages));

console.log(arr1.every((language) => language === "Php")); //false
console.log(arr1.some((language) => language === "Php")); //true

let shift = arr1.shift();
console.log(shift); //Js
console.log(arr1.pop()); //Python

const restArray = arr1.splice(0, 2, "c++");
console.log(arr1);

//IMPORTANT//

let arrayNumber = [4, 2, 55, 3, 1];

console.log(arrayNumber.reduce((x, y) => x + y)); // somme element array

arrayNumber.push("hi");
console.log(arrayNumber); //add element

//Filter ,Sort ,Map

console.log(arrayNumber.filter((number) => number > 10));
console.log(arrayNumber.sort());
console.log(arrayNumber.sort((a, b) => b - a)); //sort desc

arrayNumber.map((number) => console.log(number));

//--------------Methodes object-----------------------

let student = [
  {
    name: "raed",
    old: 26,
    technos: ["js", "react", "node"],
    admin: false,
  },
  {
    name: "rayen",
    old: 20,
    technos: ["js", "angular", "node"],
    admin: true,
  },
  {
    name: "rami",
    old: 30,
    technos: ["js", "vue", "node"],
    admin: false,
  },
];

document.body.innerHTML = student
  .filter((user) => user.admin === false)
  .filter((user) => user.name.includes("a"))
  .sort((a, b) => b.old - a.old)
  .map(
    (user) =>
      `  <div>
    <h1>${user.name}</h1>
  </div>`
  );
