function distance(x1, y1, x2, y2) {
    const dist = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    return dist;
}

console.log(distance(15, 10, 25, 15));

console.log("/////////////////////////////////////////////////");

function theorem(a, b, c) {
    if (Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2)) {
        return "Числа удовлетворяют теореме Пифагора";
    } else {
        return "Числа НЕудовлетворяют теореме Пифагора";
    }
}

console.log(theorem(3, 4, 5));

console.log("/////////////////////////////////////////////////");

function triangle(a1, b1, c1) {
    const check1 = a1 + b1 > c1;
    const check2 = b1 + c1 > a1;
    const check3 = c1 + a1 > b1;

    const answer = check1 && check2 && check3;

    const action = answer ? "можно" : "нельзя";

    return `На сторонах с длинами (${a1}, ${b1}, ${c1}) ${action} построить треугольник.`;
}

console.log(triangle(12, 13, 14));