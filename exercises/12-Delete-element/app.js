var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    let peopleDeleted = [];
    people.forEach(item => {
        if (item!=personName) peopleDeleted.push(item);
    })
    return peopleDeleted;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));