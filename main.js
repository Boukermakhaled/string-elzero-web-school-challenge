/*
string challenge
all solutions must be in one chain
you can use concatenate
*/
let a = "Elzero Web School";

//include this methods i your solution [slice , charAt]
console.log(a.charAt(2).toLocaleUpperCase() + a.slice(3,6)); //Zero

// 8 H
console.log(a.charAt(a.indexOf("h")).toUpperCase().repeat(8)); //HHHHHHHH

//return array
console.log(a.split(" ",1))// [Elzero]

//use only "substr" method + template literals in your solution
console.log(a.substr(0,7) + a.substr(11));//Elzero School

//solution must be dynamic and string may change
console.log(a.charAt(0).toLocaleLowerCase() + a.charAt(1).toLocaleLowerCase() + a.slice(2).toUpperCase()); //elZERO WEB SCHOOL