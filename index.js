const numbers = [];

const arr = (numAmm) => {
    for (let i = 1; i <= numAmm; i += 1) {
        numbers.push(i);
    };
};

arr(20);

console.log(numbers);

const sumOfEven = numbers
    .filter(num => num % 2 === 0)
    .reduce((sum, numbers) => {
        return sum + numbers;
    }, );

console.log(sumOfEven);

console.log(`////////////////////////////////////////////////`);

const data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const flat = data.reduce((prev, item) => {
    return prev.concat(item);
}, );

console.log(flat.join(` `));