import React from 'react';
import ReactDOM from 'react-dom';
import './Contact.css';

function Contact (props) {
    return(
        <div className="Contact">
            <img className="avatar" src={props.avatar} />
            <div>
                <div className ="name">{props.name}</div>
                <div className="status">
                    <div className={props.online ? 'status-online' : 'status-offline' }></div>
                    <p className='status-text'>{props.online ? "Online" : "Offline" }</p>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<Contact />,
document.getElementById('root'));

export default Contact;