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

const sides = {
    cat1: 3,
    cat2: 4,
    hyp: 5,
};

const theorem = (sides) => {
    const p = (Math.pow(sides.hyp, 2) === Math.pow(sides.cat1, 2) + Math.pow(sides.cat2, 2));
    return p;
}

const result = theorem(sides);

const answer = result ? "удовлетворяют" : "не удовлетворяют";

console.log(`Числа ${answer} теореме Пифагора`);

console.log("/////////////////////////////////////////////////");

const value = {
    a1: 12,
    b1: 13,
    c1: 14,
};

function triangle(value) {
    const check = (value.a1 + value.b1 > value.c1) && (value.b1 + value.c1 > value.a1) && (value.c1 + value.a1 > value.b1);
    return check;
}

const res = triangle(value);

const action = res ? "можно" : "нельзя";

console.log(`Итог: ${action} построить треугольник.`);