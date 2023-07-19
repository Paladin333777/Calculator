const add = function(num1, num2){return parseFloat(num1) + parseFloat(num2)};
const subtract = function(num1, num2){return parseFloat(num1) - parseFloat(num2)};
const multiply = function(num1, num2){return parseFloat(num1) * parseFloat(num2)};
const divide = function(num1, num2){
    if(parseFloat(num2) != 0){
        return parseFloat(num1) / parseFloat(num2)
    } else {
        alert('Huh?')}
    }

const display = document.querySelector('.display')
const firstVal = document.getElementById('firstVal')
const operator = document.getElementById('operator')
const secondVal = document.getElementById('secondVal')
const clear = document.getElementById('clear')
const deletes = document.getElementById('delete')
const inputScrn = document.getElementById('inputScreen')

clear.addEventListener('click', event => {
    display.innerHTML = ''
    firstVal.innerHTML = ''
    secondVal.innerHTML = ''
    operator.innerHTML = ''
})

deletes.addEventListener('click', event => {
    if(secondVal.textContent != ''){
        secondVal.textContent = secondVal.textContent.slice(0,-1)
    } else if(operator.textContent != ''){
        operator.textContent = operator.textContent.slice(0,-1)
    } else if(firstVal.textContent != ''){
        firstVal.textContent = firstVal.textContent.slice(0,-1)
    }
})

function roundToThree(value) {
    value *= 1000;
    value = Math.round(value);
    return value / 1000;
}

function correctOper(oper, valOne, valTwo){
    switch(oper){
        case '+':
            return(add(valOne, valTwo))
            break;
        case '-':
            return(subtract(valOne, valTwo))
            break;
        case '*':
            return(multiply(valOne, valTwo))
            break;
        case '/':
            return(divide(valOne, valTwo))
            break;    
}
}

document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('click', event => {
        newVal(item.textContent)
    })
})

function newVal(value){
    if(operator.textContent == "") {
        firstVal.textContent += value;
    } else {
        secondVal.textContent += value
    }
}

document.querySelectorAll('.oper').forEach(item => {
    item.addEventListener('click', event => {
        newOper(item.textContent)
    })
})

function newOper(value){
    if(firstVal.textContent != '' && secondVal.textContent == ''){
        operator.textContent = value;
    } else if(operator.textContent != '' && secondVal.textContent != '') {
        let currAns = roundToThree(correctOper(operator.textContent, firstVal.textContent, secondVal.textContent))
        firstVal.textContent = currAns
        display.textContent = currAns
        secondVal.textContent = ""
        operator.textContent = value
    }
}

document.getElementById('equal').addEventListener('click', event => {
    if(firstVal.textContent != '' && operator.textContent != '' && secondVal.textContent != '') {
        let currAns = roundToThree(correctOper(operator.textContent, firstVal.textContent, secondVal.textContent))
        display.textContent = currAns
        firstVal.textContent = currAns
        operator.textContent = ''
        secondVal.textContent = ''
    } else {
        return
    }
})

