const numbers = [];

const arrNum = (a, b, c, amount) => {

    let number = 3;

    for (let counter = 0; counter < amount;) {
        const matched = number % a === 0 || number % b === 0 || number % c === 0;

        if (matched) {
            counter += 1;
            numbers.push(number);
        }

        number += 1;
    }

    return numbers;
}

const arrNumRes = arrNum(3, 5, 15, 20);

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

const minmaxNum = (numbers) => {
    let solution = `Максимальное и минимальное числа массива равны ${Math.max.apply(null, numbers)} и ${Math.min.apply(null, numbers)} соответственно`;
    return solution;
}

const minmaxNumRes = minmaxNum(numbers);

console.log(minmaxNumRes);