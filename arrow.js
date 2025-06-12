// this keyword

const user ={
    username: "vivek",
    price: 333,

    welcommessage: function(){
        console.log(`${this.username},welcome to web`);
        

    }
}
user.welcommessage()
// console.log(this);

//this object ke andr hi kaam krta hai function ke andr ni krr raha 

// const addtwo = (num1,num2)=>{
//     return num1+ num2
// }
// console.log(addtwo(2,3));


//arrow function esse bhi  declare ho jata hai

// const addtwo = (num1,num2)=>
//      num1+ num2
// console.log(addtwo(2,3));


//or esee bhii

const addtwo = (num1,num2)=>
     (num1+ num2)
console.log(addtwo(2,3));
