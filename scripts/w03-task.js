/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    
    const addNumber1 = parseFloat(document.querySelector('#add1').value);
    const addNumber2 = parseFloat(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);



/* Function Expression - Subtract Numbers */

const substract = function(number1, number2){
    return number1 - number2;
}

const subtractNumbers = function(){
    const subtractNumber1 = parseFloat(document.querySelector('#subtract1').value);
    const subtractNumber2 = parseFloat(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = substract(subtractNumber1,subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    const multiplyNumber1 = parseFloat(document.querySelector('#factor1').value);
    const multiplyNumber2 = parseFloat(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

function divide(number1, number2){
    return number1 / number2;
}

function divideNumbers(){
    
    const dividendNumber = parseFloat(document.querySelector('#dividend').value);
    const divisorNumber = parseFloat(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividendNumber, divisorNumber);
}

document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);


/* Decision Structure */

function myFunction() {

    const subtotal = parseFloat(document.querySelector("#subtotal").value);
    const discount = subtotal- (subtotal*0.2);
    
    if (member = document.getElementById("member").checked){
        document.getElementById("total").innerHTML = discount.toFixed(2);
    }else{
        document.getElementById("total").innerHTML = subtotal.toFixed(2);
    }
}

  document.querySelector('#getTotal').addEventListener('click',myFunction);


/* ARRAY METHODS - Functional Programming */

const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById("array").innerHTML = numbersArray;

/* Output Odds Only Array */
const oddnumbers = numbersArray.filter((number)=> number%2 == 1);
document.getElementById("odds").innerHTML = oddnumbers;

/* Output Evens Only Array */
const evennumbers = numbersArray.filter((number)=> number%2 == 0);
document.getElementById("evens").innerHTML = evennumbers;

/* Output Sum of Org. Array */

const sumOfArray = numbersArray.reduce((sum, number) => sum + number);
document.getElementById("sumOfArray").innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */

const twoArray = numbersArray.map(number => number*2);
document.getElementById("multiplied").innerHTML = twoArray;

/* Output Sum of Multiplied by 2 Array */

const doublesArray = numbersArray.map(number => number*2);
const sumA = doublesArray.reduce((sum, number)=> sum + number);
document.getElementById("sumOfMultiplied").innerHTML = sumA;