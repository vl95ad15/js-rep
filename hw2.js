const numbers = [];

let number = 3;

function arrayNum(a, b, c) {
    for (let counter = 0; counter < 20;) {
        const matched = number % a === 0 || number % b === 0 || number % c === 0;

        if (matched) {
            counter += 1;
            numbers.push(number);
        }

        number += 1;
    }

    return numbers;
}

console.log(arrayNum(3, 5, 15));

console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////\n");

let product = 1;
let position = 3;

function eachPos() {

    for (let index = 2; index < numbers.length; index += position) {
        product *= numbers[index];
    }

    return product;
}

const answer = eachPos();

console.log(`Произведение всех элементов находящихся в каждой ${position} позиции массива: ${answer}\n`);

console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////\n");

let sum = 0;

function avarageSum() {

    for (let i = 0; i < numbers.length; i += 1) {
        sum += numbers[i];
    }

    let avarage = sum / numbers.length;
    return avarage;
}

const av = avarageSum();

console.log(`Cреднее арифметическое всех чисел: ${av}\n`);

console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////\n");

let max = numbers[0];

function maxNum() {

    for (let index = 1; index < numbers.length; index += 1) {

        if (max < numbers[index]) {
            max = numbers[index];
        }
    }

    return max;
}

const maxAnswer = maxNum();

console.log(`Максимальное число массива: ${maxAnswer}\n`);

let min = numbers[0];

function minNum() {

    for (let index = 1; index < numbers.length; index += 1) {
        if (min > numbers[index]) {
            min = numbers[index];
        }
    }

    return min;
}

const minAnswer = minNum();

console.log(`Минимальное число массива: ${minAnswer}\n`);