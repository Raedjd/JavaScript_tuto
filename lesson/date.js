//Classique date
let date = new Date();
console.log(date);

//Timestamp
let timestamp = Date.parse(date);
console.log(timestamp);

//TsoString
console.log(date.toISOString());

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return newDate;
}

console.log(dateParser(date));
