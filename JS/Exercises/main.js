function calculateAge(){

//getting inputs from the user

let dayOfBirth = document.getElementById('dob').value;
let monthOfBirth = document.getElementById('mob').value;
let yearOfBirth = document.getElementById('yob').value;

//creating a date object for the birthdate
let birthDate = new Date(yearOfBirth, monthOfBirth - 1, dayOfBirth);

// calculating the age in years
let ageMilliseconds = Date.now() - birthDate.getTime();
let ageInYears = ageMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

// rounding the number of years
let ageYears = Math.floor(ageInYears);

// calculating the number of months 
let ageMonths = Math.floor((ageInYears - ageYears) * 12);

// calculating the number of days
let ageDays = Math.floor((ageInYears - ageYears - (ageMonths / 12)) * 365.25);

document.getElementById('result').innerHTML = "Your age is: " + ageYears + "years, " + ageMonths + " months, and " + ageDays + " days";
}
