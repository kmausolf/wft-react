import { createContext, useContext, useState } from "react";

const ContactsContext = createContext();

const initialContacts = [
  {
    id: 0,
    name: "Donald"
  },
  {
    id: 1,
    name: "Goofy"
  },
  {
    id: 2,
    name: "Pluto"
  },
];

const ContactsProvider = ({children}) => {
    const [contacts, setContacts] = useState(initialContacts);
    const [currentId, setCurrentId] = useState(3);

    // Procedurally generate a new id so the user doesn't have to think about it
    const generateId = () => {
        const id = currentId;
        setCurrentId(id + 1);
        return id;
    }

    const addContact = (name) => {
        if(name !== "") {
            const id = generateId();
            setContacts([...contacts, {id, name} ])
            // Return the newly created contact for logging purposes
            return {id, name};
        }
        // If the user didn't provide a name
        console.error("Unable to create new contact. Please provide a valid name.")
    }

    const deleteContact = (id) => {
        // Filter out the contact with the given id
        const filteredContacts = contacts.filter(contact => contact.id !== id);
        setContacts(filteredContacts);
    }

    const value = {contacts, addContact, deleteContact};

    return <ContactsContext.Provider value={value}>{children}</ContactsContext.Provider>
}

const useContacts = () => {
    const context = useContext(ContactsContext);
    if (context === undefined) {
        throw new Error('useContacts must be used within a ContactsProvider')
    }
    return context;
}

export { ContactsProvider, useContacts };