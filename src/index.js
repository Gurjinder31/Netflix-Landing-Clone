import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const index = ()=>{
    return <div>
        <App/>
        </div>;
}

ReactDOM.render( <App   />, document.querySelector('#root'));   