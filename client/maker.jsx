const helper = require('./helper.js');

const handleBook = (e) => {
    e.preventDefault();
    helper.hideError();

    const title = e.target.querySelector('#bookTitle').value;
    const author = e.target.querySelector('#bookAuthor').value;
    const pages = e.target.querySelector('#bookPages').value;
    const genre = e.target.querySelector('#bookGenre').value;
    const _csrf = e.target.querySelector('#_csrf').value;

    if (!title || !author || !pages) {
        helper.handleError('All fields are required!');
        return false;
    }

    helper.sendPost(e.target.action, { title, author, pages, genre, _csrf }, loadBooksFromServer);

    return false;
};

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
                <input id="bookAuthor" type="text" name="author" placeholder="Author" />
            </div>
            <div>
                <label htmlFor="pages">Pages: </label>
                <input id="bookPages" type="number" min="0" name="pages" />
            </div>
            <div>
                <label htmlFor="genre">Genre: </label>
                <select id="bookGenre" name='genre'>
                    <option>Action/Adventure</option>
                    <option>Art/Architecture</option>
                    <option>Autobiography</option>
                    <option>Biography</option>
                    <option>Business</option>
                    <option>Children's Book</option>
                    <option>Classic</option>
                    <option>Comic</option>
                    <option>Cookbook</option>
                    <option>Crime</option>
                    <option>Drama</option>
                    <option>Fantasy</option>
                    <option>Guide</option>
                    <option>Health/Fitness</option>
                    <option>Historical Fiction</option>
                    <option>History</option>
                    <option>Horror</option>
                    <option>Humor</option>
                    <option>Memoir</option>
                    <option>Mystery</option>
                    <option>Paranormal</option>
                    <option>Philosophy</option>
                    <option>Poetry</option>
                    <option>Political</option>
                    <option>Religion</option>
                    <option>Romance</option>
                    <option>Science</option>
                    <option>Science Fiction</option>
                    <option>Self Help</option>
                    <option>Short Story</option>
                    <option>Sports</option>
                    <option>Thriller</option>
                    <option>Travel</option>
                    <option>True Crime</option>
                    <option>Young Adult</option>
                </select>
            </div>
            <input id="_csrf" type="hidden" name="_csrf" value={props.csrf} />
            <input className="makeBookSubmit" type="submit" value="Add Book" />
        </form>
    );
};

const BookList = (props) => {
    if (props.books.length === 0) {
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
                    <h3 className="bookTitle"> Title: {book.title} </h3>
                    <h3 className="bookAuthor"> Author: {book.author} </h3>
                    <h3 className="bookPages"> Pages: {book.pages} </h3>
                    <h3 className="bookGenre"> Genre: {book.genre} </h3>
                    <a  href="/review" ><input className="finishedBook" type="submit" value="Finished Book" /></a>
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