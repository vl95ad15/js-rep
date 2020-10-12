const matrix = [];

const matrixVal = {
    rows: 9,
    cols: 9,
};

const generateMatrix = (matrixVal) => {

    for (let i = 1; i <= matrixVal.rows; i += 1) {
        const row = [];
        for (let j = 1; j <= matrixVal.cols; j += 1) {
            row.push(i * j);
        }
        matrix.push(row);
    }

    for (let i = 0; i < matrixVal.rows; i += 1) {
        let row = "";
        for (let j = 0; j < matrixVal.cols; j += 1) {
            row += `${matrix[i][j].toString()}\t`;
        }
        console.log(row);
    }

    return matrix;
}

generateMatrix(matrixVal);