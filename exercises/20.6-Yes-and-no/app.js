let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

let wikiwoko = function(a) {
    if (a == 0) return "woko"; 
    else if (a == 1) return "wiki";
}

console.log(theBools.map(wikiwoko));