let books = []
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then((json) => {
    json.forEach(element => {
      books.push(element)
    })
    console.log(json)
  });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', () => {
 
  fetchBooks();
  renderBooks(books)
});

// fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then((json) => {
//     debugger
//     console.log(json)
//   });

