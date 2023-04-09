import React, { useState, useEffect } from 'react';
import AddContactscForm from './Phonebook/AddContactsForm/AddContactsForm';
import ContactList from './Phonebook/ContactsList/ContactsList';
import SearchEngine from './Phonebook/SearchEngine/SearchEngine';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contactsList')) ?? [],
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contactsList', JSON.stringify(contacts));
  }, [contacts]);

  const getFilterValue = e => {
    setFilter(e.currentTarget.value);
  };

  const addContact = newContact => {
    const normalizedNewName = newContact.name.toLocaleLowerCase();
    const isNameUnique = contacts.find(
      ({ name }) => normalizedNewName === name.toLocaleLowerCase(),
    );

    if (isNameUnique) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts(contacts => [...contacts, newContact]);
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase().trim();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  const remove = remoweId => {
    setContacts(contacts => contacts.filter(({ id }) => id !== remoweId));
  };

  const visibleContacts = getVisibleContacts();
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <AddContactscForm addContact={addContact} />
      <SearchEngine value={filter} onInputChange={getFilterValue} />
      <ContactList contactsList={visibleContacts} removeContact={remove} />
    </div>
  );
}
