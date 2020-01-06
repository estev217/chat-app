import React from 'react';
import ReactDOM from 'react-dom';
import './Contact.css';

const Contact = ({ avatar, name, online }) => {
    return (
        <div className='Contact'>
            <img className='avatar' src={avatar} alt={name} />
            <div className='status'>
                <p className='name'>{name}</p>
                <p className='status-text'><span className={online ? 'status-online' : 'status-offline'}></span>{online ? 'Online' : 'Offline'}</p>
            </div>
        </div>
    );
}

ReactDOM.render(<Contact />,
    document.getElementById('root'));

export default Contact;