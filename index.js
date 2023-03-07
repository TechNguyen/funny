const inputNumber = document.querySelector('.number');
const resultNumber = document.querySelector('.result');
const deleteBtn = document.querySelector('.delete-btn');
const countBtn = document.querySelector('.count-btn');
const regex = /[0-9]+/g;
// inputNumber.addEventListener('keypress', isNum(inputNumber.value))
function isNum() {
    let value = inputNumber.value.trim();
    if(!Number.isInteger(value * 1) || !regex.test(value.trim())) {
        value = '';
        inputNumber.value = ''
    }
    return value;
}
function countNum(value) {
    let count = 0;
    if(value != '') {
        for(let i = 0; i < value.length; i++) {
            if(value[i] % 2 == 0) {
                count++;
            }
        }
    }
    resultNumber.value = count;
}
deleteBtn.addEventListener('click', () => {
    inputNumber.value = '';
    resultNumber.value = ''
})
countBtn.addEventListener('click', () => {
    countNum(isNum());
})