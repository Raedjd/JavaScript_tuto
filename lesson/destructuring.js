//------------Destructuring------------------------
let moreData = {
  destVar: ["Element 1", "Element 2"],
};

console.log(moreData.destVar);
const { destVar } = moreData;
console.log(destVar);

let arr = [10, 12, 13];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

let [x, y, z] = arr; //destructing for best practice
console.log(x, y, z);
