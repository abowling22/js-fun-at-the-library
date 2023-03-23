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

/// if statement is saying that if the array does not include a string push it to the array of reviews, if it does do nothing. 

function calculatePageCount(title) {
  var result = title.length * 20
  return result
} 

function writeBook(title, character, genre) {
  var book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  }
  return book
}

function editBook(changedBook) {
  var decreasedBookPages = changedBook.pageCount * .25
  var theValueIWant = changedBook.pageCount - decreasedBookPages
  changedBook.pageCount = theValueIWant
}

/// we are ediitng a book created by our create book function. 
// we want to change the information in a specific key to be decreased by 25%
//




module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}

