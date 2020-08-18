// Task 1 (Найти расстояние между двумя точками)

const x1 = 15;
const y1 = 10;
const x2 = 25;
const y2 = 15;

const dist = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log(dist)

// Task 2 (убедиться что числа удовлетворяют теореме Пифагора)

const a = 2;
const b = 2;
const c = 8;

if (Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2)) {
    console.log("Числа удовлетворяют теореме Пифагора")
} else {
    console.log("Числа НЕудовлетворяют теореме Пифагора")
}

// Task 3 (даны три числа, убедиться что они могут являться сторонами треугольника)

const a1 = 2;
const b1 = 6;
const c1 = 9;

if ((a1 + b1) > c1 && (a1 + c1) > b1 && (b1 + c1) > a1) {
    console.log("Числа могут являться сторонами треугольника")
} else {
    console.log("Числа НЕмогут являться сторонами треугольника")
}