import React, { useEffect, useState } from 'react'
import {mainUser, contactsMessages, Message} from './generateFakeData';
import Avatar from './components/Avatar/Avatar';
import ContactBox from './components/ContactBox/ContactBox';
import MessageBox from './components/MessageBox/MessageBox';
import ChatInputBox from './components/ChatInputBox/ChatInputBox';
import Search from './components/Search/Search';
import Welcome from './components/Welcome/Welcome';
import './App.css'

function App() {
    const [data, setData] = useState(contactsMessages); // contact boxes data
    const [contactSelected, setContactSelected] = useState({}); // conversation selected data
    const [currentMessages, setCurrentMessages] = useState([]); // current messages are messages in the conversation/Message box
    const [message, setMessage] = useState(''); // message is the text entered by user
    const [search, setSearch] = useState(''); // search textbar state
    const [filteredContacts, setFilteredContacts] = useState([]); // filtered contacts after search

    useEffect(() => {
        const currentContact = data.find((d) => d.contact.id === contactSelected.id);
        setCurrentMessages(( currentContact && currentContact.messages) || []);
        filterContacts(data,search)
    }, [contactSelected, data, search]);

    const pushMessage = () => {
        const index = data.findIndex((d) => d.contact.id === contactSelected.id);
        const newData = Object.assign([], data, {
            [index]: {
                contact: contactSelected,
                messages: [...data[index].messages, new Message(true, message, new Date())]
            }
        });
        setData(newData);
        setMessage('');
    }

    const handleSearch = (input) => {
        setSearch(input);
        filterContacts(data, input);
    };

    const filterContacts = (data, search) => {
        const result = data.filter(({contact})=>{
            return !search || contact.name.toLowerCase().includes(search.toLowerCase())
        });
        setFilteredContacts(result);
    }

    mainUser.avatar = "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg";
    return (
        <div className="app">
            <aside>
                <header>
                    <Avatar user={mainUser} showName></Avatar>
                </header>
                <Search search={search} handleSearch={handleSearch} />
                <div className="contact-boxes">
                    {filteredContacts.map(({contact, messages})=>{
                       return <ContactBox contact={contact} key={contact.id} messages={messages} setContactSelected={setContactSelected} />
                    })}
                </div>
            </aside>
            {contactSelected.id ? (
            <main>
                <header>
                    <Avatar user={contactSelected} showName />
                </header>
                <MessageBox messages={currentMessages} />
                <ChatInputBox message={message} setMessage={setMessage} pushMessage={pushMessage} />
            </main>) : <Welcome />}
        </div>
    )
}

export default App
