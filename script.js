/////////////////////////////////
// freeCodeCamp JS Challenges //
///////////////////////////////

// Challenge 1
// Wherefore art thou (Make a function that looks through an array of objects and returns an array of all object that have matching property and value pairs.)

const whatIsiNAName = (collection, source) => {
    let keys = Object.keys(source)

    return collection.filter((obj) => {
        for(let key of keys) {
            if(!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
                return false;
            }
        }
        return true
    })
}

console.log(whatIsiNAName([{ first: "Romeo", last: "Montague"}, { first: "Mercuttio", last: null }, { first: "Tybalt", last: "Capulet"}], { last: "Capulet"}));