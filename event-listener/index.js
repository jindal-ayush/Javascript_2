// buttonElement.addEventListener('click' , event => console.log("clicked"));

// let buttonElement = document.querySelector('#my-button');
// let behaviour = event => console.log('i am clicked');

// buttonElement.addEventListener('click' , behaviour);

// let printDate = event => console.log(new Date());

// buttonElement.addEventListener('click' , printDate);

// buttonElement.removeEventListener('click' , behaviour);

//let arr = [3,5,7,9];
// for(let i =0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// arr.forEach(function(num){
//     console.log(num);
// })

// arr.forEach((num)=>{
//     console.log(num);
// })

//arr.forEach((num)=> console.log(num));


// let arr = [1,2,3,4,5,6,7,8,9];

// let odd = arr.filter((num)=>{
//     if(num %2 ==0){
//         return true
//     }else{
//         return false;
//     }
// })
// console.log(odd);


let arr = [1,2,3,4,5,6];
// let square = arr.map((num)=>{
//     return num*num;
// })
// console.log(square);
arr.map((num)=>console.log(num*num));
