import React from 'react';
import Contact from './Contact';

const contacts = [
    {
        avatar: "https://randomuser.me/api/portraits/women/73.jpg",
        name: "Joy Garza",
        online: true,
    },

    {
        avatar: "https://randomuser.me/api/portraits/men/23.jpg",
        name: "Tony Newman",
        online: true
    },

    {
        avatar: "https://randomuser.me/api/portraits/men/13.jpg",
        name: "Fernando Holmes",
        online: false
    },

    {
        avatar: "https://randomuser.me/api/portraits/women/92.jpg",
        name: "Cindy Berry",
        online: true
    },

    {
        avatar: "https://randomuser.me/api/portraits/men/47.jpg",
        name: "Kirk Richards",
        online: false

    },
];



const ContactList = () => {
    return (
    <div>
        {contacts.map(item => (
            <Contact avatar={item.avatar}
            name={item.name}
            online={item.online} />
        ))}
    </div>
    )
}

export default ContactList;