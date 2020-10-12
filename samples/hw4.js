const createPerson = (fn, ln, mn, bd, ag) => ({
    firstName: fn,
    lastName: ln,
    middleName: mn,
    birthDate: bd,
    age: ag,
});

const isLeapYear = (year) => {
    let d = new Date(year, 1, 28);
    d.setDate(d.getDate() + 1);
    return d.getMonth() == 1;
}

const getAge = (date) => {
    let d = new Date(date),
        now = new Date();
    let years = now.getFullYear() - d.getFullYear();
    d.setFullYear(d.getFullYear() + years);
    if (d > now) {
        years--;
        d.setFullYear(d.getFullYear() - 1);
    }
    let days = (now.getTime() - d.getTime()) / (3600 * 24 * 1000);
    return Math.floor(years + days / (isLeapYear(now.getFullYear()) ? 366 : 365));
}

const people = [{
        firstName: "John",
        lastName: "Doe",
        middleName: "Henry",
        birthDate: new Date(1990, 0, 10),
        age: getAge(new Date(1990, 0, 10))
    },
    {
        firstName: "Jack",
        lastName: "Jackson",
        middleName: "John",
        birthDate: new Date(1989, 1, 11),
        age: getAge(new Date(1989, 1, 11))
    },
    {
        firstName: "Elly",
        lastName: "Taylor",
        middleName: "Alabama",
        birthDate: new Date(1988, 2, 12),
        age: getAge(new Date(1988, 2, 12))
    },
    {
        firstName: "Ashley",
        lastName: "Roberts",
        middleName: "Alpha",
        birthDate: new Date(1987, 3, 13),
        age: getAge(new Date(1987, 3, 13))
    },
    {
        firstName: "Carey",
        lastName: "Simons",
        middleName: "Delta",
        birthDate: new Date(1986, 4, 14),
        age: getAge(new Date(1986, 4, 14))
    },
    {
        firstName: "Adam",
        lastName: "Kimbel",
        middleName: "Gamma",
        birthDate: new Date(1985, 5, 15),
        age: getAge(new Date(1985, 5, 15))
    },
    {
        firstName: "Emely",
        lastName: "Price",
        middleName: "Suzan",
        birthDate: new Date(1984, 6, 16),
        age: getAge(new Date(1984, 6, 16))
    },
    {
        firstName: "Janey",
        lastName: "Sullivan",
        middleName: "Jill",
        birthDate: new Date(1983, 7, 17),
        age: getAge(new Date(1983, 7, 17))
    },
    {
        firstName: "Howard",
        lastName: "Tyson",
        middleName: "Michael",
        birthDate: new Date(1982, 8, 18),
        age: getAge(new Date(1982, 8, 18))
    },
    {
        firstName: "Mark",
        lastName: "Foley",
        middleName: "Tim",
        birthDate: new Date(1981, 9, 19),
        age: getAge(new Date(1981, 9, 19))
    },
];

const comparePerson = (a, b) => {
    if (a.firstName === b.firstName) {
        if (a.middleName === b.middleName) {
            return a.lastName <= b.lastName ? -1 : 1;
        }

        return a.middleName <= b.middleName ? -1 : 1;
    }

    return a.firstName <= b.firstName ? -1 : 1;
};

const sortArr = (a, compare, direction = 1) => {
    for (let i = 0; i < a.length - 1; i += 1) {
        for (let j = 0; j < a.length - 1 - i; j += 1) {
            if (compare(a[j], a[j + 1]) === direction) {
                const t = a[j];
                a[j] = a[j + 1];
                a[j + 1] = t;
            }
        }
    }
};

sortArr(people, comparePerson);

console.log(people);

// const ageArr = people.map(person => person.age);

const sumAge = people.reduce((av, person) => av + person.age, 0);

const avAge = Math.round(sumAge / people.length);

console.log(`Avarage age is ${avAge} year(s).`);

let max = people[0];
let min = people[0];

people.forEach((person) => {
    max = max.age < person.age ? person : max;
});

console.log(`The oldest person is ${max.firstName}. His(her) age is ${max.age} year(s).`);

people.forEach((person) => {
    min = min.age > person.age ? person : min;
});

console.log(`The youngest person is ${min.firstName}. His(her) age is ${min.age} year(s).`);