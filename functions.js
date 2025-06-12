// function addtwonumbers  (num1 ,num2)
// {

//  console.log(num1+num2);
  
// }
// addtwonumbers(5,5)





function addtwonumbers  (num1 ,num2)
{

 return num1+num2;
  
}
const result = addtwonumbers(6,5)
// console.log(result);



function userloginmessage(username){
    if(!username){
        console.log("please enter username");
        return
        

    }
    return `${username} just logged in`

}
// console.log( userloginmessage(""));



function calculatecartprice(...num){
    return num

}
// console.log(calculatecartprice(100,200,300,400,500));


const user ={
    name: "vivek",
    price: "499"
}

function handleobj(anyobj){
    console.log(`username -- ${anyobj.name} and price is -${anyobj.price}`);
    

}
// handleobj(user)
//this is also a method



handleobj({
    name: "dev",
    price: "1"

})


//issi tarah se array ko bhi krr skte hai


const newarray =[100,200,300,355,633544]
function arrayfun(value){
    return value[3]

}
// console.log(arrayfun(newarray));
// ek or tarika

console.log(arrayfun([100,2,5,5,6,2,5]));




