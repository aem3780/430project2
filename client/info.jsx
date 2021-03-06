const helper = require('./helper.js');

const Info = (props) => {
    return (
        <div className='info'>
            <h1>About Bookshelf</h1>
            <p>
                Bookshelf is an API that helps you keep track of the books you want to read.
                All you have to do is fill in the corresponding information about your book and click "Add Book."
                You can review books once they've been read, and access previously read books easily.
            </p>
            <img src="/assets/img/step1.png" alt="step 1" className="steps" />
            <img src="/assets/img/step2.png" alt="step 2" className="steps" />
            <img src="/assets/img/step3.png" alt="step 3" className="steps" />
            <img src="/assets/img/step4.png" alt="step 4" className="steps" />
            <img id="advertisment" src="/assets/img/advertisment1.png" alt="advertisment" />
        </div>
    );
};



const init = async () => {
    const response = await fetch('/getToken');
    const data = await response.json();


    ReactDOM.render(<Info csrf={data.csrfToken} />,
        document.getElementById('info'));
};

window.onload = init;