import React from 'react';
import ReactDOM from 'react-dom';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online,
        };
    }

    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
                <div>
                    <div className="name">{this.props.name}</div>
                    <div className="status" onClick={event => {
                    const newOnline = !this.state.online;
                    this.setState({ online: newOnline });
                    }}>
                        <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                        <p className="status-text">{this.state.online ? "Online" : "Offline"}</p>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Contact />,
    document.getElementById('root'));

export default Contact;