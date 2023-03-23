
function shelfBook(book, shelf) {  
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
}

//add books (objects) to a specific shelf [array]. 
// the variables are global push to add them to the array.

module.exports = {
   shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};