import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsFilter, selectContactsList } from '../redux/Selectors';
import { deleteContact } from '../redux/Operations';
import css from './ContactList.module';

const ContactList = () => {
  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));

  console.log(visibleContacts);

  const dispatch = useDispatch();

  const handleDeleteContact = (userId) => {
    dispatch(deleteContact(userId));
  };

  return (
    <ContactsList>
      {visibleContacts.map(({ id, name, phone }) => (
        <div key={id}>
          <p>
            <span>{name}:</span>
            <span>{phone}</span>
          </p>
          <button onClick={() => handleDeleteContact(id)}>Delete</button>
        </div>
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactList;
