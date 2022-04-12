const helper = require('./helper.js');

const handleBook = (e) => {
    e.preventDefault();
    helper.hideError();

    const title = e.target.querySelector('#bookTitle').value;
    const author = e.target.querySelector('#bookAuthor').value;
    const pages = e.target.querySelector('#bookPages').value;
    const _csrf = e.target.querySelector('#_csrf').value;

    if (!title || !author || !pages) {
        helper.handleError('All fields are required!');
        return false;
    }

    helper.sendPost(e.target.action, {title, author, pages, _csrf}, loadBooksFromServer);

    return false;
};

const handleDelete = async (e) => {
    e.preventDefault();
    helper.hideError();
    const title = e.currentTarget.dataset.title;
    const _csrf = document.querySelector('#bookForm').querySelector('#_csrf').value;

    await helper.bookDelete(e.currentTarget.href, { title, _csrf });

    loadBooksFromServer();
    return false;
}

const BookForm = (props) => {
    return (
        <form id="bookForm"
            onSubmit={handleBook}
            name="bookForm"
            action="/maker"
            method="POST"
            className="bookForm"
        >
            <div>
            <label htmlFor="title">Title: </label>
            <input id="bookTitle" type="text" name="title" placeholder="Book Title" />
            </div>
            <div>
            <label htmlFor="author">Author: </label>
            <input id="bookAuthor" type="text" name="author" placeholder="Author"/>
            </div>
            <div>
            <label htmlFor="Pages">Pages: </label>
            <input id="bookPages" type="number" min="0" name="pages"/>
            </div>
            <input id="_csrf" type="hidden" name="_csrf" value={props.csrf} />
            <input className="makeBookSubmit" type="submit" value="Make Book" />
        </form>
    );
};

const BookList = (props) => {
    if(props.books.length === 0) {
        return (
            <div className="bookList">
                <h3 className="emptyBook">No Books Yet!</h3>
            </div>
        );
    }
    
    const bookNodes = props.books.map(book => {
        return (
            <div key={book._id} className="book">
                <div className="bookFlex">
                     <img src="/assets/img/bookicon.png" alt="book icon" className="bookIcon" />
                     <img id="bookDelete" href="/deleteBook" data-name={book.name} onClick={handleDelete} src="/assets/img/trashcan.png" alt="trash can" className="trash" />
                     <h3 className="bookTitle"> Title: {book.title} </h3>
                     <h3 className="bookAuthor"> Author: {book.author} </h3>
                     <h3 className="bookPages"> Pages: {book.pages} </h3>
                 </div>
             </div>
           
        );
    });

    return (
        <div className="bookList">
            {bookNodes}
        </div>
    );
};

const loadBooksFromServer = async () => {
    const response = await fetch('/getBooks');
    const data = await response.json();
    ReactDOM.render(
        <BookList books={data.books} />,
        document.getElementById('books')
    );
};

const init = async () => {
    const response = await fetch('/getToken');
    const data = await response.json();

    ReactDOM.render(
        <BookForm csrf={data.csrfToken} />,
        document.getElementById('makeBook')
    );

    ReactDOM.render(
        <BookList books={[]} />,
        document.getElementById('books')
    );

    loadBooksFromServer();
};

window.onload = init;