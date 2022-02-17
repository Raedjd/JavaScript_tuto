//SELECTEURS

//document.querySelector("h4").style.background ="yellow"
const baliseHTML = document.querySelector("h4");

//Click event
const container = document.querySelector(".click-envent");

const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

container.addEventListener("click", () => {
  container.classList.add("event-clicked");
  container.classList.remove("event-clicked");
  container.classList.toggle("event-clicked");
});

btn1.addEventListener("click", () => {
  response.style.visibility = "visible";
});

//-----------------------------------------------------------

//Mouse Events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  console.log("Mouse move!!");
  // console.log(e);
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(2) translate(-50%, -50%)";
});

container.addEventListener("mouseenter", () => {
  mousemove.style.color = "pink";
});

container.addEventListener("mouseout", () => {
  mousemove.style.color = "red";
});

response.addEventListener("mouseover", () => {
  mousemove.style.transform = "rotate(2deg)";
});

document.addEventListener("keypress", (e) => {
  console.log(e);
});
