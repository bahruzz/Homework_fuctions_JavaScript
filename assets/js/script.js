"use strict"

// let person={
//     name:"Nurlan",
//     surname:"Umudov",
//     age:22
// }

// console.log(person.name);

// let datas = [
//     {
//         name: "Fatime",
//         surname: "Qayxanova",
//         groups: [
//             "pb101",
//             "p134"
//         ],
//         teachers: [
//             "Cavid",
//             "Hemid"
//         ]
//     },
//     {
//         name: "Fexriyye",
//         surname: "Tagizade",
//         groups: [
//             "pb101",

//         ],
//         teachers: [
//             "Cavid",

//         ]
//     },
//     {
//         name: "Afide",
//         surname: "Veliyeva",
//         groups: [
//             "pb101",
//             "p236"
//         ],
//         teachers: [
//             "Cavid",
//             "Elcin"
//         ]
//     },



// ]
// console.log(datas)

// let surname = "Tagizade";
// console.log(surname.length);

// console.log(surname.toLowerCase());

// console.log(surname.toUpperCase());

// console.log(surname.indexOf("a"));

// console.log(surname.trim());

// console.log(surname.startsWith("t"));

// console.log(surname.lastIndexOf("a"));

// console.log(surname.substring(0, 2));

// for (let i = 0; i < surname.length; i++) {
//     const element = surname[i];
//     console.log(element);
// }

//  console.log(surname.includes("t".toUpperCase()));

// let array=surname.split(",")

// console.log(arrayy);

// console.log(surname.charAt(1));

// let surname = "Tagizade";

// let surname="Hello"
//   console.log(surname.slice(5,0));

//  console.log(surname.substring(5, 0));

//  console.log(surname.replace("Italiya"));


// let nums = [1,4,5,6,7,8,8]

// for (const item of nums) {

//    console.log(item);
// }


// let person = {
//     name: "Nurlan",
//     surname: "Umudov",
//     age: 22
// }


// for (const key in person) {
//   if(key=="name" || key=="surname")
//   console.log(person[key]);
// }

// let nums = [1,4,5,6,7,8,8];


// nums.forEach((element,i)=>{
//     console.log(element+ " " + i)
// });

// let data = nums.join("*");

// nums.pop();

// nums.push(100);

// nums.shift();
// nums.unshift(500);


// const myGirls=["Cecilie","Lone"];
// const myBoys=["Emil","Tobias","Linus"];
// const myChildren=[myBoys.concat(myGirls)];
// console.log(myChildren);


// let address="Ehmedli";


// let result=[...address];
// console.log(result);


// let obj={
//     name:"test",
//     surname:"testov"
// }


// let data={...obj};
// console.log(data)

// let nums = [1,4,5,6,7,8,8];
// let data=[...nums];
// console.log(data);

// function showtext(){
//     let a=100;
//     if(a>50){

//         console.log("Hello world");

//     }

// }

// function showtext(text){
//     console.log(text);
// }

// showtext("salamlar");

// function sum(a,b){
//     let result=a+b;
//     return;
//     console.log(result)
// }
// sum(100,200);

// let datas=[1,2,100,5,600,9,90]
// function findData(arr){
//     for (const item of arr) {
//         if(item==100){
//             console.log("100 already found");
//             return;
//         }

//     }
//     console.log("Welcome to our site");
// }

// findData(datas);

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(4,5));
// sum(4,5);

// alert(sum(4,5));

// let datas=[1,2,100,5,600,9,90]

// function test(arr){
//     arr[0]=100;
//     console.log(arr);
// }

// test(datas);
// console.log(datas);

// let arr1=[1,2,3];
// let arr2=arr1;
// arr2[0]=200;

// console.log(arr1);

// console.log(arr2);


// let elems1=[1,2,34];
// let elems2=[4,5,6];
// elems1=elems2;
// elems2[0]=100;

// console.log(elems1);

// console.log(elems2);



// let b=100;

//  function test(a){
//      a=20
//      console.log(a);
//  }

//  test(b);
//  console.log(b);


// function test(...datas){
//     for (let i = 0; i < datas.length; i++) {
//         const element = datas[i];
//         console.log(element);

//     }
//  Datas.forEach(element => {
//     console.log(element);

//  });

// }
// test(1,2,3,4,5)



// function test() {
//     for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         console.log(arguments);
//     }
// }


// test(1, 2, 3, 4, 5)


// function showNumber(){
//     console.log(this);
// }

// showNumber();

// let showText=()=>{
//     console.log(this);
// }

// showText("Nesir bey");

// let student={
//     name:"Reshad",
//     surname:"Agayev",
//     age:21,
//     address:"Neftciler",
//     getFullname:function(){
//         console.log(this.name+ " "+this.surname);
//     },

//     getFulldata:()=>{
//         console.log(this.name+ " "+this.surname);
//     }


// }

// student.getFullname();
// student.getFulldata();

// const test=()=>{
//     for(let i=0;i<arguments.length,i++){
//         const element=arguments[i];
//         console.log(element);
//     }
// }

// test(1,2,3);

// function test(){
//     for (let i = 0; i < arguments.length; i++){
//         const element = arguments[i];
//         console.log(element);
//     }
// }

// test(1, 2, 3);



// /////////////////////////////Home Tasks/////////////////////////////////


// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin

// function divide(n){
//     if(n%3==0 && n%7==0){
//         console.log("Divided");

//     }else{
//         console.log("Not divided");
//     }
// }
// divide(24);


// 2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 

// function Faktorial(n) {
//     let result = 1;

//     for (let i = n; i > 0; i--) {

//         result *= i;

//     }
//     return result


// }

// console.log(Faktorial(5));

// 3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

// let datas=[1,2,3,4,6,8,9]

// function squareOffSum(arr)
// {
//     let sum=0;

//     for (const item of datas) {
//         if(item%2==0){
//             sum+=item**2
//         }
        
//     }
//     return sum



// }

// console.log(squareOffSum(datas));


// 4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e,
//  ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 

// function Login(email,password){
//     if(email=="cavid@code.edu.az" && password=="12345"){
//         return "login success"
//     }
//     else{
//         return "email or password wrong"
//     }

// }

// console.log(Login("cavid@code.edu.az","1235"));

// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.
// let datas=[1,2,3,4,5,6,8,9]

// function sumOfOddNumbers(arr){
//     let sum=0;
//     for (const item of datas) {
//         if(item%2==1){
//             sum+=item
//         }
        
//     }
//     return sum;
// }

// console.log(sumOfOddNumbers(datas));


// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// let datas=[1,2,3,4,5,6,8,9]

// function sumOfEvenNumbers(arr){
//     let sum=0;
//     for (const item of datas) {
//         if(item%2==0){
//             sum+=item
//         }
        
//     }
//     return sum;
// }

// console.log(sumOfEvenNumbers(datas));


// 9) Function yazacaqsiz, Functiona parametr olaraq string gelecek. Hemin function gelen parametrin ilk herfini boyuk herf edib geri qaytarsin.

// function firstCharToUpper(str){
//     return str.charAt(0).toUpperCase()+str.slice(1)
// }

// let str="behruz";
// console.log(firstCharToUpper(str));

// 8) Icerisinde name, surname, age, email olan bir nece student objectleriniz var. Ashagida elave etdiklerimi functionlar sekilinde yazin, functionlar objectlerden ibaret array qebul edecek.
//      1) Yashi 18-25 araliginda olan telebelerin sayi.
//      2) Emailinde "c" herfi olan studentlerin sayi.

let datas = [
    {
        name: "Hacixan",
        surname: "Hacixanov",
        age:19,
        email:"hacixan@code.edu.az"


    },
    {
        name: "Esgerxan",
        surname: "Bayramov",
        age:26,
        email:"esgerxan@gmail.com"
    },
    {
        name: "Reshad",
        surname: "Agayev",
        age:21,
        email:"reshad@mail.ru"
    },
    {
        name: "Amirastan",
        surname: "Mereyev",
        age:33,
        email:"amirastan@code.edu.az"
    },
    {
        name: "Sirac",
        surname: "Memmedov",
        age:22,
        email:"sirac@mail.ru"
    }

]


// function countStudentAge(arr){
//     let count=0;
// for (const item of datas) {
 
//     if(item.age>=18 && item.age<=25){
//         count++;
//     }
    
//    }
//     return count;
// }

// console.log(countStudentAge(datas));



// function countStudentsForEmail(arr) {
//     let count = 0;
//     for (const item of datas) {
//         if (item.email.includes("c")) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countStudentsForEmail(datas));
