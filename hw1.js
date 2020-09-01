function distance(x1, y1, x2, y2) {
    const dist = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    return dist;
}

console.log(distance(15, 10, 25, 15));

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