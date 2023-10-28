//Control Statement and Loop Exercises
// task1 if condition
// var a=prompt("enter number")

// if(a>0){
//     alert("The sign is +")
// }
// else if(a==0){
//     alert("no sign")
// }
// else(
//     alert("sin is -")
// )
// ------------------------------------------------------->
// task2 for loop

// for( var i=0;i<=15;i++){
//     if(i%2==0){
//         console.log(i,"is even")
//     }
//     else{
//         console.log(i,"is odd")
//     }

// }
// --------------------------------------------------------->


// task 3  operators
 
// let num1=prompt("enter num1")
// let num2=prompt("enter num2 ")

// if(num1>num2)
// {
//     console.log(num1," is the largest")
// }
// else if(num2>num1){
//     console.log(num2,"is the largest")
// }
// else if(num1==num2)
// {
//     console.log(num1,"and" ,num2, "are equal")
// }
// ----------------------------------------------------------->

//  task4
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   if (i % 3 === 0 || i % 5 === 0)
//    {
//     sum += i; 
//   }
// }
//------------------------------------------------------------>


// for(let i=0;i<=100;i++)
// {
//     if(i%5==0 && i%3==0)
//     {
//         console.log(i,"fizzbuzz")
//     }
//     else if(i%5==0)
//     console.log(i,"buzz")
// else if(i%3==0)
// console.log(i,"fizz")
// else
// console.log(i)
// }
//-------------------------------------------------------------->

// task 5 GCD
// function gcd(a, b) {
//   	var divisor;
//   	for (let i = 1; i <= a && i <= b; i++) {
//     	if( a % i == 0 && b % i == 0) {
//       		divisor = i;
//     	}
//   	}
//   	return divisor;
// }

// var result = gcd(65, 80);
// console.log(result);