// Array
let array = ["tunis", "france", "germany"];
//console.log(array);
//console.log(array[1][1]);

let array1 = ["tunis", 23, true, [1, 2], { name: "Raed" }];

//console.log(array1[4].name);

let object = {
  name: "raed",
  old: 26,
  technos: ["js", "react", "node"],
  admin: false,
};
//object.email = "raed.jaidi@esprit.tn";
//console.log(object);

let data = [
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
    admin: false,
  },
  {
    name: "rami",
    old: 30,
    technos: ["js", "vue", "node"],
    admin: false,
  },
];

//console.log(data[2].name);

//control structures

//if (data[0].old > data[1].old)
// console.log(data[0].name + " est plus agé qui" + data[1].name);

//while
let w = 0;

while (w < 10) {
  w++;
  // console.log(w);
}

//do while
let d = 0;
do {
  d++;
  //console.log(d);
} while (d < 5);

//boucle for

for (const user of data) {
  //document.body.innerHTML += `<li>${user.name},${user.technos}</li>`;
}

for (var i = 0; i < data.length; i++) {
  //console.log(i);
  //console.log(data[i]);
  // document.body.innerHTML += "<h3>" + data[i].old + "</h3>";
}

document.body.addEventListener("click", (e) => {
  console.log(e.target.id);
  switch (e.target.id) {
    case "js":
      document.body.style.background = "green";
      break;
    case "py":
      document.body.style.background = "pink";
      break;
    case "j":
      document.body.style.background = "violet";
      break;
    default:
      null;
  }
});
