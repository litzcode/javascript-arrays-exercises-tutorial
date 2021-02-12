var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

let dataTypeArray = [];

for (let i=0; i<mix.length; i++) {
    let dataType = typeof mix[i];
    dataTypeArray.push(dataType);
}

console.log(dataTypeArray)