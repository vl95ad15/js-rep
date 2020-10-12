const numbers = [];

const arrVal = {
    a: 3,
    b: 5,
    c: 15,
    amount: 20,
};

const arrNum = (arrVal) => {

    let number = 3;

    for (let counter = 0; counter < arrVal.amount;) {
        const matched = number % arrVal.a === 0 || number % arrVal.b === 0 || number % arrVal.c === 0;

        if (matched) {
            counter += 1;
            numbers.push(number);
        }

        number += 1;
    }

    return numbers;
}

const arrNumRes = arrNum(arrVal);

console.log(arrNumRes);

console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////\n");

const eachPos = (product, position) => {

    for (let index = 2; index < numbers.length; index += position) {
        product *= numbers[index];
    }

    return product;
}

const eachPosRes = eachPos(1, 3);

console.log(eachPosRes);

console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////\n");

const avarageSum = (sum) => {

    for (let i = 0; i < numbers.length; i += 1) {
        sum += numbers[i];
    }

    let avarage = sum / numbers.length;
    return avarage;
}

const avarageSumRes = avarageSum(0);

console.log(`Cреднее арифметическое всех чисел: ${avarageSumRes}\n`);

console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////\n");

const maxNum = (numbers) => {
    let max = Math.max.apply(null, numbers);
    return max;
}

const maxNumRes = maxNum(numbers);

console.log(`Максимальное значение массива равняется -= ${maxNumRes} =-`);

const minNum = (numbers) => {
    let min = Math.min.apply(null, numbers);
    return min;
}

const minNumRes = minNum(numbers);

console.log(`Минимальное значение массива равняется -= ${minNumRes} =-`);