import React from 'react';
import { useSelector } from 'react-redux';
import { selectContactsFilter, selectContactsList } from '../redux/Selectors';
import { ContactsListElem } from '../ContactListElem/ContactListElem';

const ContactList = () => {
  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);
  const visibleContacts = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ];
  

  return (
    <ul>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactsListElem key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};

export default ContactList;