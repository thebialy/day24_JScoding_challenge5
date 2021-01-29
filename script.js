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

whatIsiNAName([{ first: "Romeo", last: "Montague"}, { first: "Mercuttio", last: null }, { first: "Tybalt", last: "Capulet"}], { last: "Capulet"});

// Challenge 2
// Search and Replace (Perform a search and replace on the sentence using the arugments provided and return the new sentence)
// 3 Arguments

const myReplace = (str, before, after) => {
  if(before[0] === before[0].toUpperCase()) {
      after = after[0].toUpperCase() + after.slice(1)
  }
  return str.replace(before, after)
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"))