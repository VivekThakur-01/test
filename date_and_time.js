const myDate = new Date ()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString ());


let myCreatedDate = new Date (2005,4,14);
console.log(myCreatedDate.toLocaleString());

let mytimeStamp = Date.now()
console.log(mytimeStamp);
console.log(myCreatedDate.getTime())  //milisecond

console.log(Date.now()/1000);  //second








