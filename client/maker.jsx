const helper = require('./helper.js');

const handleDomo = (e) => {
    e.preventDefault();
    helper.hideError();

    const name = e.target.querySelector('#domoName').value;
    const age = e.target.querySelector('#domoAge').value;
    const height = e.target.querySelector('#domoHeight').value;
    const _csrf = e.target.querySelector('#_csrf').value;

    if (!name || !height || !age) {
        helper.handleError('All fields are required!');
        return false;
    }

    helper.sendPost(e.target.action, {name, age, height, _csrf}, loadDomosFromServer);

    return false;
};

const handleDelete = async (e) => {
    e.preventDefault();
    helper.hideError();
    const name = e.currentTarget.dataset.name;
    const _csrf = document.querySelector('#domoForm').querySelector('#_csrf').value;

    await helper.domoDelete(e.currentTarget.href, { name, _csrf });

    loadDomosFromServer();
    return false;
}

const DomoForm = (props) => {
    return (
        <form id="domoForm"
            onSubmit={handleDomo}
            name="domoForm"
            action="/maker"
            method="POST"
            className="domoForm"
        >
            <div>
            <label htmlFor="name">Name: </label>
            <input id="domoName" type="text" name="name" placeholder="Domo Name" />
            </div>
            <div>
            <label htmlFor="age">Age: </label>
            <input id="domoAge" type="number" min="0" name="age"/>
            </div>
            <div>
            <label htmlFor="height">Height: </label>
            <input id="domoHeight" type="number" min="0" name="height"/>
            </div>
            <input id="_csrf" type="hidden" name="_csrf" value={props.csrf} />
            <input className="makeDomoSubmit" type="submit" value="Make Domo" />
        </form>
    );
};

const DomoList = (props) => {
    if(props.domos.length === 0) {
        return (
            <div className="domoList">
                <h3 className="emptyDomo">No Domos Yet!</h3>
            </div>
        );
    }
    
    const domoNodes = props.domos.map(domo => {
        return (
            <div key={domo._id} className="domo">
                <div className="domoFlex">
                     <img src="/assets/img/bookicon.png" alt="domo face" className="domoFace" />
                     <img id="domoDelete" href="/deleteDomo" data-name={domo.name} onClick={handleDelete} src="/assets/img/trashcan.png" alt="trash can" className="trash" />
                     <h3 className="domoName"> Name: {domo.name} </h3>
                     <h3 className="domoAge"> Age: {domo.age} </h3>
                     <h3 className="domoHeight"> Height: {domo.height} </h3>
                 </div>
             </div>
           
        );
    });

    return (
        <div className="domoList">
            {domoNodes}
        </div>
    );
};

const loadDomosFromServer = async () => {
    const response = await fetch('/getDomos');
    const data = await response.json();
    ReactDOM.render(
        <DomoList domos={data.domos} />,
        document.getElementById('domos')
    );
};

const init = async () => {
    const response = await fetch('/getToken');
    const data = await response.json();

    ReactDOM.render(
        <DomoForm csrf={data.csrfToken} />,
        document.getElementById('makeDomo')
    );

    ReactDOM.render(
        <DomoList domos={[]} />,
        document.getElementById('domos')
    );

    loadDomosFromServer();
};

window.onload = init;