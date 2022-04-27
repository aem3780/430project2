const helper = require('./helper.js');

const Documentation = (props) => {
    return (
        <div className='docInfo'>
            <h1>Project Documentation</h1>
            <ul>
                <li>What is the intended purpose of your application? What does it do?</li>
                <p>The intended purpose of my application is to allow the user to create
                    a reading list and then once the book has been finished, the reader
                    can rate the book and have it added to a “reviewed books” list. The
                    user can create a list of books, view their list, review their read books,
                    and access their reviews list.</p>

                <li>How are you using React? What components have you made?</li>
                <p>I am implementing React through the login, and signup features,
                    the reading list component, the reading form component, the documentation page,
                    the information page, the reviews list component, and the review form component.</p>

                <li>What data are you storing in MongoDB?</li>
                <p>User log-in information, user book lists, and user review lists.</p>

                <li>What is your profit model?</li>
                <p>My profit model is to use advertisements for monetization. Similar to the app Good Reads.</p>

                <li>What went right in the development of this project?</li>
                <p>I was surprised by how much of this project went right. I really like how it turned out.</p>

                <li>What went wrong in the development of this project?</li>
                <p>I was unable to implement a password-changing procedure and a delete button for this project.</p>

                <li>What did you learn while developing this project?</li>
                <p>I learned that although I really enjoy doing the designing aspects of frontend dev,
                    I could see myself spending more time learning back-end aspects as well.
                    I was originally intimidated by this project, but learning from class examples
                    and assignments helped immensely.</p>

                <li>If you were to continue, what would you do to improve your application?</li>
                <p>If I were to continue I would like to add a delete button and have a component
                    that would allow the user to make multiple lists and sort them.</p>

                <li>If you went above and beyond, how did you do so?</li>
                <p>I used photoshop and illustrator to edit and create my backgrounds and icons.
                    (I’m not sure if this counts.)</p>

                <li>If you used any borrowed code or code fragments, where did you get them from?</li>
                <p>I didn’t, only past code examples from class and assignments. </p>

                <li>What do the code fragments do? Where are they in your code?</li>
                <p>n/a</p>
            </ul>

            <img id="advertisment" src="/assets/img/advertisment2.png" alt="advertisment" />
        </div>
    );
};



const init = async () => {
    const response = await fetch('/getToken');
    const data = await response.json();


    ReactDOM.render(<Documentation csrf={data.csrfToken} />,
        document.getElementById('documentation'));
};

window.onload = init;