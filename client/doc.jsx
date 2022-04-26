const helper = require('./helper.js');

const Documentation = (props) => {
    return (
        <div className='docInfo'>
            <h1>Project Documentation</h1>
            <ul>
                <li>What is the intended purpose of your application?</li>
                <li>What work has been completed for this milestone?</li>
                <li>What work is left, and how do you plan to complete it?</li>
                <li>What does your timeline/roadmap look like to finish on time?</li>
                <li>How are you using React?</li>
                <li>What components have you made?</li>
                <li>What components do you still plan to add?</li>
                <li>What data are you storing in MongoDB?</li>
                <li>What data do you still need to store?</li>
                <li>What is your profit model?</li>
                <li>Have you implemented it yet?</li>
                <li>If so, how?</li>
                <li>If not, what is your plan to implement it?</li>
                <li>Do you have a plan for going above and beyond? If so, what is it?</li>
                <li>If you used any borrowed code or code fragments, where did you get them from?</li>
                <li>What do the code fragments do? Where are they in your code?</li>
            </ul>
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