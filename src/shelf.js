
function shelfBook(book, shelf) {  
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
}

//add books (objects) to a specific shelf [array]. 
// the variables are global push to add them to the array.
//push doesnt work as we need to add them to the start of the array to simulate them being on an actual shelf

function unshelfBook(bookTitle, array) {
  //console.log(array[1].title)
  for (var i = 0; i < array.length; i++) {
    if (array[i].title.includes(bookTitle)){
      array.splice (i, 1)
    }
  }
    // if (array[i].title.includes(!bookTitle)) {
      // console.log(array)
}
  // } console.log(array)
  // console.log(array[1].title.includes(bookTitle))
  // array.splice(1, 1,)
  // console.log(array)
  //console.log(bookTitle)
  // if (array.includes(title.bookTitle)){
  // array.splice(0, 1)
  //  } console.log(array)
  



//go through our arrray
// identify a book by its key in this case title

// what i think youll do is similar to 8 on book, where we want to use includes to produce a  true or false result
// if object.key = true from the includes  in mycase bookTitle
// then splice 
//loop throgh the array to start using a for loop although i dont think this is necessary

function listTitles() {

}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};