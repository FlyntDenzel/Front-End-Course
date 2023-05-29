const htmlBody = document.querySelector('body');

//creating the clicking function for our page
//creating an anonymous function
const randomClick = function() {
    //declared an array of colors
    // const colors = ["green", "blue", "aqua", "beige", "white"];

    //getting random number based on the array size
    const randomIndex = Math.floor(Math.random() * colors.length);
    //get the random color via index
    const randomColor = colors[randomIndex];

    htmlBody.style.backgroundColor = randomColor;
    console.log("Color changed to " + randomColor);
}

randomClick();

function onClickEvent() {
    //assigns a new button element to the element variable  
    const element = document.createElement('p');
    //display the text message in the browser
    element.innerText = 'Button is clicked';

    //creates a new element into the container class
    document.querySelector('.container').appendChild(element);
}

document.querySelector('button').onclick = onClickEvent;

const firstVariable = 'first code';
const secondVariable = 10;

//initializing an object
const thirdVariable = {
    prop1: 'nchang',
    prop2: 'fomekong',
    prop3: 'denzel'
};
console.log(thirdVariable.prop3);


//data co-ersing
const sumVariable = firstVariable + secondVariable;
console.log(sumVariable);

const weekDay = ['monday', 'tuesay', 'wednesday'];
console.log(weekDay[2]);

const myBoolean = true;
const myString = 'hello world';
const firstNumber = 20;
let secondNumber = 40;
secondNumber = secondNumber + 40
const myArray = [myBoolean, myString];

sumProperty = firstNumber + secondNumber;

const myObject = {
    firstproperty: myArray,
    secondproperty: sumProperty
}

console.log(myObject);
console.log(myObject.secondproperty);

//prints out the value at index 1 of the array from the object
console.log(myObject.firstproperty[1]);

const objetVariable = {
    property1: 'i am property 1',
    property2: 'i am property 2',
    property3: [20, 30, 40]
};
console.log(objetVariable.property3[2]);

//declaring an exponential numbers
const expNumber = 8**2;
console.log(expNumber);

const arr = ['denzel', 'christian', 'josue', 42];
for(let i=0; i<arr.length; i++){
    //searches if element at any index number is number
    if (typeof arr[i] === 'number'){
        console.log(arr[i]);//prints the value of number type
    }
}

//declaring and calling the function seperately
function firstFunction(){
    console.log('this is another function');
}
firstFunction();

//declaring and calling the function at the same time
//invoked function
(function secondFunction(){
    console.log('this is second function');
}) ();

//exercise 3
//splitting a string into an array
let string = 'denzel';
let arrString = string.split("");
console.log(arrString);

//reversing the array 
let reverseArray = arrString.reverse();
console.log(reverseArray);

//converting the array back into string
let reverseString = reverseArray.join("");
console.log(reverseString);

// const array1 = [1,2,3];
// reversedArray = array1.reverse();
// console.log(reversedArray);

// let = prompt('enter a number');

//exercise 4
function evenOrOdd(number){
    if (number % 2 === 0) {
        console.log('this is an even number');
    }
    else {
        console.log('this is an odd number');
    }
}
evenOrOdd();

//exercise 5
function getCount(str){
    let vowelCount = 0;
    const arr = string.split("");

    for (let i = 0; i < arr.length; i++) {
        switch(arr[i]){
            case 'a':
                vowelCount++;
                break;
            case 'e':
                vowelCount++;
                break;
            case 'i':
                vowelCount++;
                break;
            case 'o':
                vowelCount++;
                break;
            case 'u':
                vowelCount++;
        }
        
    }

    return vowelCount;
}

//exercise 6
function greet(){
    const name  = prompt('enter a name');
    console.log(name);
    if(name === "denzel"){
        console.log('whats good my nigga!');
    }
    else{
        console.log('hey there ' + name);

    } 
    
}

//exercise 7
function modulus( n,x,y){
    const result1 = n/x;
    const result2 = n/y;

    if(result1 % 1 === 0 && result2 % 2 ===0){
        return true;
    }
    else{
        return false;
    }
}

//exercise 8
function negative(num){
    if(num < 0){
        // console.log(num);
        return true;
    }
    else{
    //    let num1 = num * -1;
        // console.log(num1);
        return false;
    }
}

//exercise 9
function compare(){
    const numArr = [1,2,3,4];
    for(i=0; numArr.length; i++){
        if(arr[i] < arr[i+1]){
            console.log(arr[i]);
        }
    }
}

//exercise 10
function sumation(){
    const num = prompt('Enter number here');
    let sum = 0;
    for(i=1; i<=num; i++){
        sum = sum +i;
    }
    console.log(sum);
}

// sumation();

//exercise 11
function average(){
    const studentArray = [1,4,6];
    let sum = 0;
    for (i=0; i<studentArray.length; i++){
        sum = sum +studentArray[i];
    }
    const mean = sum / studentArray.length;

    return Math.floor(mean);
}

//callback functions
//Re-usability of functions
const arrayNum = [4,5,2,1];
function callBackArray(mapper){
    return mapper * 2;
}
//transforms all elements within the array with respect to the specific function
const newArray = arrayNum.map(callBackArray);
// console.log(newArray);

//can reuse the same callback function for a different purpose
const strArray = ['nchang', 'fomekong', 'denzel'];
console.log(strArray.map(mapper => mapper[1]));

// === compares both value and type
//== same value but not the same time

//months starts with an index of 0
const myDate = new Date()

const str1 = 'hello world i am here';
const str2 = 'hello Mum i am here';
//identifiers
//using a regular expression 

// slice is a method used for removing some members of an array from a specific index
// syntax: numArr.slice([index of array])

//splice is a method used to remove elements from an array stating the starting index and how many elements are to be removed from the array

const blogPost = [
{
    title: 'soccer',
    category: 'leg'
},
{
    title: 'basketball',
    category: 'hands'
},

{
    title: 'rugby',
    category: 'hands'
}
];

//exercise 12
function filter(){
    //return an array with filtered strings
    oldArray = [2, 5, 3,'denzel', 'nchang', 6];
    return oldArray.filter(mapper =>{
        return mapper >= 0 && mapper === 'number';
    });
}
filter();
//a DOM can be described as an API for an html document