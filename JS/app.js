const htmlBody = document.querySelector('body');

//creating the clicking function for our page
//creating an anonymous function
const randomClick = function() {
    //declared an array of colors
    const colors = ["green", "blue", "aqua", "beige", "white"];

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

function greet(name){

    if(name == "denzel"){
        return "Whats up my guy";
    }
    else 
        return "Good morning";
    
}
