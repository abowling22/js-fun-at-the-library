function createTitle(title) {
    
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return mainCharacter
}

function saveReview(string, array) {
  if (!array.includes(string)){
    array.push(string)
  }
}

/// if statement is saying that if the array does not include a string push it to the array of revies, if it does do nothing. 

function calculatePageCount() {

  
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}