// object literal 

const jsuser = {
    name: "vivek",
    age: 20,
    email: "vivek@123",
    city: "bpl",
    lastlogin: "[mon,fri]",

    //  [mysmbl]:"key1",


}

const mysmbl = Symbol("key1")

// console.log(jsuser.city); //first method
// console.log(jsuser["name"]); // second method

// console.log(jsuser[mysmbl]) //symbol printing

//object mai change krne ka tarika

jsuser.city = "pipariya"

// console.log(jsuser.city); // changed done


//freeze mai koi chnage ni krr sakte object freez hoo gaya hai


//   +++++++++++++++++++++++++++ PART 2++++++++++++++++++++++++++++++++++++++++++ 

// object do tarike se create krr skte hai 



// const tinderuser = new object ()                             // this is single turn object 

const tinderuser2 = {}                                       // non single turn object

tinderuser2.id = "123viv"
tinderuser2.name = "thakur"
tinderuser2.gender = "male"
console.log(tinderuser2.name);

const user1 = {
    email1: "viv@123",
    fullname: {
        userfulname: {
            name2: "vivek",
            name3: "thakuurr"
        }

    }
}

// console.log(user1.fullname.userfulname.name2);


const obj1 = { 1: "a" , 2: "b"}
const obj2 = { 3: "c" , 4: "d"}

const obj3 = {...obj1,...obj2}

// console.log(obj3);

const users = [
    {
    id: "1",
    email: "viv"
},
{
    id: "1",
    email: "viv"
},
{
    id: "1",
    email: "viv"
}]


// console.log(users[2].id);
// console.log(tinderuser2);
// console.log(Object.keys(tinderuser2));
// console.log(Object.values(tinderuser2));
// console.log(Object.entries(tinderuser2));

const course ={
    cousre: "java",
    price: "1",
    coursetaecher: "hitesh"
}

// de-structure method 

const {price : rupey} = course
console.log(rupey);





