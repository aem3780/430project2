const helper = require('./helper.js');

const handleReview = (e) => {
    e.preventDefault();
    helper.hideError();

    const title = e.target.querySelector('#bookTitle').value;
    const author = e.target.querySelector('#bookAuthor').value;
    const pages = e.target.querySelector('#bookPages').value;
    const genre = e.target.querySelector('#bookGenre').value;
    const rating = e.target.querySelector('#bookRating').value;
    const review = e.target.querySelector('#bookReviewText').value;
    const _csrf = e.target.querySelector('#_csrf').value;

    if (!title || !author || !pages ||!genre ||!rating) {
        helper.handleError('All fields are required!');
        return false;
    }

    helper.sendPost(e.target.action, { title, author, pages, genre, rating, review, _csrf }, loadReviewsFromServer);

    return false;
};


const ReviewForm = (props) => {
    return (
        <form id="reviewForm"
            onSubmit={handleReview}
            name="reviewForm"
            action="/review"
            method="POST"
            className="reviewForm"
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
            <div>
                <label htmlFor="rating">Rating: </label>
                <select id="bookRating" name='rating'>
                    <option>★★★★★</option>
                    <option>★★★★</option>
                    <option>★★★</option>
                    <option>★★</option>
                    <option>★</option>
                    <option>None</option>
                </select>
            </div>
            <div>
                <label htmlFor="reviewText">Leave a review: </label>
                <input id="bookReviewText" type="text" name="reviewText" maxLength="250" placeholder="Your review..." />
            </div>
            <input id="_csrf" type="hidden" name="_csrf" value={props.csrf} />
            <input className="makeReviewSubmit" type="submit" value="Publish Review" />
        </form>
    );
};

const ReviewList = (props) => {
    if (props.reviews.length === 0) {
        return (
            <div className="reviewList">
                <h3 className="emptyReviewList">No Reviews Yet!</h3>
            </div>
        );
    }

    const reviewNodes = props.reviews.map(review => {
        return (
            <div key={review._id} className="review">
                <div className="reviewFlex">
                    <img src="/assets/img/bookicon.png" alt="book icon" className="bookIcon" />
                    <h3 className="bookTitle"> Title: {review.title} </h3>
                    <h3 className="bookAuthor"> Author: {review.author} </h3>
                    <h3 className="bookPages"> Pages: {review.pages} </h3>
                    <h3 className="bookGenre"> Genre: {review.genre} </h3>
                    <h3 className="bookRating"> Rating: {review.rating} </h3>
                    <h3 className="bookReviewText"> Review: {review.review} </h3>
                </div>
            </div>

        );
    });

    return (
        <div className="reviewList">
            {reviewNodes}
        </div>
    );
};

const loadReviewsFromServer = async () => {
    const response = await fetch('/getReviews');
    const data = await response.json();
    ReactDOM.render(
        <ReviewList reviews={data.reviews} />,
        document.getElementById('reviews')
    );
};

const init = async () => {
    const response = await fetch('/getToken');
    const data = await response.json();


    ReactDOM.render(
        <ReviewForm csrf={data.csrfToken} />,
        document.getElementById('makeReview')
    );

    ReactDOM.render(
        <ReviewList reviews={[]} />,
        document.getElementById('reviews')
    );


    loadReviewsFromServer();
};

window.onload = init;