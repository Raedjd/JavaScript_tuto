const target = document.getElementById("target");

let array = ["devlopper", "desginer"];
let wordIndex = 0;
let letterIndex = 0;
const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.textContent = array[wordIndex][letterIndex];
  setTimeout(() => {
    letter.remove();
  }, 200);
};

const loop = () => {
  setTimeout(() => {
    if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 200);
    }
  }, 50);
};
loop();
