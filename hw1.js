const point1 = {
    x1: 15,
    y1: 10,
};

const point2 = {
    x2: 25,
    y2: 15,
};

const distance = (point1, point2) => {

    const dist = Math.sqrt(Math.pow((point2.x2 - point1.x1), 2) + Math.pow((point2.y2 - point1.y1), 2));
    return dist;
}

console.log(distance(point1, point2));

console.log("/////////////////////////////////////////////////");

function theorem(a, b, c) {
    const p = (Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2));
    return p;
}

const result = theorem(3, 4, 5);

const answer = result ? "удовлетворяют" : "не удовлетворяют";

console.log(`Числа ${answer} теореме Пифагора`);

console.log("/////////////////////////////////////////////////");

function triangle(a1, b1, c1) {
    const check = (a1 + b1 > c1) && (b1 + c1 > a1) && (c1 + a1 > b1);
    return check;
}

const res = triangle(12, 13, 14);

const action = res ? "можно" : "нельзя";

console.log(`Итог: ${action} построить треугольник.`);