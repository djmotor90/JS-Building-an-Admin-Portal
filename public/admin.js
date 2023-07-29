
// Your Code Here

// retrive a list of books from the server
// admin.js
async function getBooks() {
let booksResponse = await fetch ("http://localhost:3001/listBooks");
let booksJson = await booksResponse.json();
displayBooks(booksJson);
console.log (booksJson)
}
getBooks()

  
// Display a list of book titles to the admin.

function displayBooks(books) {
    let rootDiv = document.getElementById('root');
    let booksList = document.createElement('ul');
    books.forEach(book => {
        let bookCardDiv = document.createElement('div');
        let title = document.createElement('h2');
        title.innerText = book.title;
        let input = document.createElement('input');
        input.value = book.quantity;
        let submitBtn = document.createElement('button');
        submitBtn.innerText = "Submit";

        submitBtn.addEventListener('click', () => {
            fetch("http://localhost:3001/updateBook", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: book.id,
                    quantity: input.value
                })
            })
        });
        bookCardDiv.appendChild(title);
        bookCardDiv.appendChild(input);
        bookCardDiv.appendChild(submitBtn);
        booksList.appendChild(bookCardDiv);
    });
    rootDiv.appendChild(booksList);
}
