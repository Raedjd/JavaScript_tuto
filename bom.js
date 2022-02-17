//console.log(window.innerHeight);
//console.log(window.scrollY);

//window.open("http://google.com", "cours.js", "height=600", "width=800");
//window.close();

//--------Event for window---------
//alert("hello");
//confirm("are you sure!");
//prompt("Enter your name!");

//Timer
setTimeout(() => {
  // logique executé
}, 2000); // start after 2000

let interval = setInterval(() => {
  // document.body.innerHTML += `<div> new block</div>`;
}, 1000);

document.body.addEventListener("click", (e) => {
  e.target.remove;
  clearInterval(interval);
});

//Location
//console.log(location.href);
//console.log(location.path);
//console.log(location.search);
//location.replace("https://github.com/Raedjd");

window.onload = () => {
  location.href = "https://github.com/Raedjd";
};

//Navigator
console.log(navigator.userAgent);
//History
//console.log(history);
//window.history.back();
//history.go(-2);
