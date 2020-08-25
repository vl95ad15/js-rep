// Task 2.0 (Вывести матрицу таблицы умножения)

let table = [];

for (let i = 1; i <= 10; i++) {
    let row = [];
    for (let j = 1; j <= 10; j++) {
        row.push(i * j);
    }
    table.push(row);
}

for (let i = 0; i < table.length; i++) {
    let row = table[i];
    for (let j = 0; j < row.length; j++) {
        let value = row[j];
        process.stdout.write(value.toString() + '\t');
    }

    console.log()
}