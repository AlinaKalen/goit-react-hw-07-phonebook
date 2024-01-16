import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsFilter, selectContactsList } from '../redux/Selectors';
import { deleteContact } from '../redux/Operations';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));

  const dispatch = useDispatch();

  const handleDeleteContact = (userId) => {
    dispatch(deleteContact(userId));
  };

  return (
    <ul>
      {visibleContacts.map(({ id, name, phone }) => (
        <div className={css.LiContact} key={id}>
          <p>
            <span>{name}:</span>
            <span>{phone}</span>
          </p>
          <button className={css.DelContact} onClick={() => handleDeleteContact(id)}>
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
