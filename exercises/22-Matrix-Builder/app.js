// Code goes here

function matrixBuilder(matrix){
    let newMatrix = [];
    let newArray = [];
    for (let i=0; i < matrix; i++){
        newMatrix.push(newArray);
    }
    for (let i=0; i < matrix; i++){
        newArray.push(Math.round(Math.random())); 
    }
    return newMatrix;
}



// do not change anything from this line down
console.log(matrixBuilder(5))