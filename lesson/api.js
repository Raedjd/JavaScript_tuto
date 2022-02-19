//------------XMLHttpRequest---------------------
function reqListener() {
  console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;

//req.open("get", "data.txt", true);
//req.send();

req.open("get", "data.json", true);
req.send();

//---------------Fetch---------------------------

/* fetch("myLink", "object d'options")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err)); */

fetch("data.json")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
//////////////////////////////////////////////::
const myHeaders = new Headers();
const init = {
  method: "GET",
  Headers: "myHeaders",
  mode: "cors",
  cache: "default",
};

fetch("data.json", init).then((res) => console.log(res));

//CRUD

const init2 = {
  method: "POST",
  Headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    //stringify => convertir en json
    pseudo: "raedjd",
    message: "Yes",
  }),
  mode: "cors",
  Credentials: "same-origin",
};

// fetch("http://localhost:3000/posts", init2).then(() =>
//   Console.log("data send")
// );

//---------------------Asynchrone---------------------------------

setTimeout(() => {
  console.log("testing");
}, 200);

//Promise

fetch("raed").then((res) => res);

//async/await

/* function fetchData() {
  await fetch("raed"); //att que le await soit exécuté avant de faire la suite
  await executeFonction();

  console.log("test");
}

const fetchData2 = async () => {
  await fetch("raed"); //att que le await soit exécuté avant de faire la suite
  await executeFonction();

  console.log("test");
};
 */
//-----------------------JSON------------------------------------------

// Methode .json()

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    let settings = JSON.stringify(data);
    console.log(JSON.parse(settings)); // Parse => transforme json en object js
  });

//-----------------WEB API--------------------

//CLIENT STORAGE

//Local Storage

localStorage.data = "my data ";
console.log(localStorage.data);

localStorage.removeItem("data");

//Session storage

sessionStorage.dataSettings = "RAED JAIDI";
sessionStorage.clear();

//Cookies

document.cookie = "username=raedjaidi";
