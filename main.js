let books = [];

$('.book_suggestion').on('input', ())

const renderBooks = function (){
    db collection('books').get().then(data =>{
        data.docs.forEach(element =>{
            const singleBook = element.data();
            books.push(singleBook);
        });
        createList(books);
    });
}

// this is for displaying books in the browser
const createList = function (books) {
    books.forEach(element =>{
        $('.books').append('<p>'+element.name+'</p>');
    })
}

renderBooks();