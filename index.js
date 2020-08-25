// Task 1.0 (Заполнить массив 20 числами которые делятся на 3, или на 5, или на 15 и вывести его на экран (цикл for))

const a = [];

for (let i = 1; i <= 100; i += 1) {
    if (i % 3 == 0) {
        a.push(i);
    }
    if (i % 5 == 0) {
        a.push(i);
    }
    if (i % 15 == 0) {
        a.push(i);
    }
}

for (let i = 0; i < 20; i += 1) {
    console.log(`a[${i}] => ${a[i]}`);
}

// Task 1.1 (Посчитать произведение всех элементов находящихся в каждой третьей позиции)

const b = a[2] * a[5] * a[8] * a[11] * a[14] * a[17];

console.log(b)

// Task 1.2 (Посчитать среднее арифметическое всех чисел)

let sum = 0;

for (let i = 0; i < a.length; i += 1) {
    sum += a[i];
}

let avarage = sum / a.length;
console.log(avarage);

// Task 1.3 (Найти максимальное и минимальное число)

console.log(Math.max.apply(null, a));
console.log(Math.min.apply(null, a));