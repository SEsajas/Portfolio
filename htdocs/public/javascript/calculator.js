class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number){
        if (number === ',' && this.currentOperand.includes(',')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if (this.currentOperand === '')return
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current
                break;
            case '-':
                computation = prev - current
                break;
            case '÷':
                computation = prev / current
                break;
            case '*':
                computation = prev * current
                console.log(`here`)
                break;
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number){
        const stringNumber = number.toString()
        const intergerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let intergerDisplay
        if (isNaN(intergerDigits)){
            intergerDisplay = ''
        } else{
            intergerDisplay = intergerDigits.toLocaleString('en',
            {maximumFractionDigits: 0})
        }
        if (decimalDigits != null){
            return `${intergerDisplay}.${decimalDigits}`        
        }else {
            return intergerDisplay
        }
    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = 
            this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }else{
            this.previousOperandTextElement.innerText = ''
        }
    }
}
window.onload = function() {
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)
numberButtons.forEach(button =>{
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button =>{
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
equalsButton.addEventListener('click',button => {
    calculator.compute()
    calculator.updateDisplay()
})
allClearButton.addEventListener('click',button => {
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click',button => {
    calculator.delete()
    calculator.updateDisplay()
})

let check = document.querySelector('.check');
check.addEventListener('click',showAwnser)
function showAwnser(){
    let pages = document.querySelector('.page')
    if(pages.value == '1950'){
        pages.classList.toggle('w3-green')
    }else{
        pages.classList.toggle('w3-red')
    }
    const lolP = document.querySelector('.lp')
    if(lolP.value == '70'){
        lolP.classList.toggle('w3-green')
    }else{
        lolP.classList.toggle('w3-red')
    }
    const painting = document.querySelector('.paint')
    if(painting.value == '95.33'){
        painting.classList.toggle('w3-green')
    }else{
        painting.classList.toggle('w3-red')
    }
    const sun = document.querySelector('.capri')
    if(sun.value =='41.30'){
        sun.classList.toggle('w3-green')
    }else{
        sun.classList.toggle('w3-red')
    }
    const grade = document.querySelector('.grades')
    if(grade.value == '6.8'){
        grade.classList.toggle('w3-green')
    }else{
        grade.classList.toggle('w3-red')
    }
    const gameHours = document.querySelector('.game')
    if(gameHours.value == '450'){
        gameHours.classList.toggle('w3-green')
    }else{
        gameHours.classList.toggle('w3-red')
    }
    const square = document.querySelector('.square')
    if(square.value == '3'){
        square.classList.toggle('w3-green')
    }else{
        square.classList.toggle('w3-red')
    }
    const simple = document.querySelector('.simple')
    if(simple.value == '50'){
        simple.classList.toggle('w3-green')
    }else{
        simple.classList.toggle('w3-red')
    }
}
}