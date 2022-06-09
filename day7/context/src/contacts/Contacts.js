import { useState } from "react";
import { useContacts } from "../providers/ContactsProvider";

const Contacts = (props) => {
    const [name, setName] = useState("");
    const [id, setId] = useState();
    const contacts = useContacts();

    const renderContacts = () => {
        let contactList = [];

        contactList = contacts.contacts.map(contact => {
            return <li>{contact.name}, id: {contact.id}</li>
        });

        return contactList;
    }

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeId = (event) => {
        setId(parseInt(event.target.value));
    }

    return(
        <div>
            <h1>Contacts</h1>
            <ul>
                {renderContacts()}
            </ul>
            <input type="text" onChange={handleChangeName} placeholder="Enter a name..."/>
            <button onClick={() => contacts.addContact(name)}>Add Contact</button>
            <input type="text" onChange={handleChangeId} placeholder="Enter an id..."/>
            <button onClick={() => contacts.deleteContact(id)}>Delete Contact</button>
        </div>
    )
}

export default Contacts;