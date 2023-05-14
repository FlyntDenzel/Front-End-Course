const htmlBody = document.querySelector('body');

//creating the clicking function for our page
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