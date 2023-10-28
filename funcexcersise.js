// task 1

// let num1= parseInt(prompt("enter your num1"))
// let num2= parseInt(prompt("enter your num2"))
// let num3= parseInt(prompt("enter your num3"))

// function findLarget(){
//     if((num1>num2)&&(num1>num3))
//     console.log(num1,"is the larget")
// else if((num2<num3))
// console.log(num2,"is the largest")
// else
// console.log(num3,"is the largest")
// }
// findLarget()


// ----------------------------------------->
// task 2 triangle

// let side1= parseInt(prompt("enter value 1"))
// let side2= parseInt(prompt("enter value 2"))
// let side3= parseInt(prompt("enter value 3"))

// function findTraiangleType(){
//     if((side1==side2)&&(side2==side3)&&(side1==side3))
//     {
//         console.log("Equilateral triangle");
//     }
//     else if((side1==side2)||(side2==side3)||(side1==side3))
//     {
//         console.log("Isosceles triangle");
//     }
//     else
//     {
//         console.log("Scalene triangle")
//     }
// }
// findTraiangleType()

//------------------------------------------>
// task 3

// let num= parseInt(prompt(" enter the number"))

// function checkInRange()
// {
//     if((num>=15)&&(num<=30))
//     {
//         console.log("between the range")
//     }
//     else{
//         console.log("out of the range")
//     }
// }
// checkInRange()
// ----------------------------------------------->
//task 4

// function evalNumbers(){

//     let operation=prompt("Enter operation");
//     var a = 45;
//     var b= 4;
//     if(operation==="add"){
//         console.log(a+b, "Addition")
//     }
//     else if(operation==="subract"){
//         console.log(a-b, "Subraction")
//     }
//     else if(operation==="multiply"){
//         console.log(a*b, "Multiplied")
//     }
//     else if(operation==="divide"){
//         console.log(a/b, "Divison")
//     }
//     else if(operation==="modulus"){
//         console.log(a%b, "Modulus")
//     }
//     else {
//         console.log("Invalid Input - Try Add,subtract,multiply,divide,modulus")
//     }
//     }
//     evalNumbers()
// --------------------------------------------->
// task 5 



// function checkLeapYear(year) {

   
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }


// const year = prompt('Enter a year:');

// checkLeapYear(year);


// ------------------------------------------------->
// task 6




// let grade=prompt("enter student marks")

// function findGrade(){
//     if ((grade>=90)&&(grade<=100))
//     {
//         console.log("S grade");
//     }
//     else if((grade>=80)&&(grade<=90))
//     {
//         console.log(" A grade");
//     }
//     else if((grade>=70)&&(grade<=80))
//     {
//         console.log(" B grade");
//     }
//     else if((grade>=60)&&(grade<=70))
//     {
//         console.log(" C grade");
//     }
//     else if((grade>=50)&&(grade<=60))
//     {
//         console.log(" D grade");
//     }
//     else if((grade>=40)&&(grade<=50))
//     {
//         console.log(" E grade");
//     }
//     else if((grade>=0)&&(grade<=40))
//     {
//         console.log(" Student has failed marks");
//     }
//     else
//     {
//         console.log("invalid marks")
//     }
// }
// findGrade()

// ---------------------------------------------->
// task 7


// function findDaysInMonth(){

//     let month=prompt("Enter month");
//     let year=prompt("Enter year");
    
//     if(month>12){
//         console.log("Invalid month");
//     }
//     else if (month == 2) {
//         if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//           console.log("The Month has 29 days");
//         } else {
//           console.log("The Month has 28 days");
//         }}
//     else if(month==4 || month==6 || month==9 || month==11){
//         console.log("The Month has 30 days.");
//     } 
//     else {
//         console.log("The Month has 31 days.");
//     }
//     }
//     findDaysInMonth()



