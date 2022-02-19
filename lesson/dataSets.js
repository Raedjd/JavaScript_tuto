//----------------DataSets--------------

const h3js = document.getElementById("js");
//console.log(h3js.dataset.lang);

//----------------Regex-----------------

let mail = "raed.jaidi@esprit.tn";

console.log(mail.search(/raed/));
console.log(mail.replace(/esprit/, "gmail"));
console.log(mail.match(/Jaidi/i));
console.log(mail.match(/[tsp]/));
console.log(mail.match(/[123]/));

//All chiff
console.log(mail.match(/\d/));
//All letter
//console.log(mail.match([a - z]));

//All chif and letter
console.log(mail.match(/^[\w_-]+@[w-]+\.[a-z]{2,4}$/i));
