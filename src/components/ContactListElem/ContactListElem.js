import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/Operations';
import css from './ContactListElem.module.css';

export const ContactsListElem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (userId) => {
    dispatch(deleteContact(userId));
  };
 

  return (
        <div className={css.LiContact} key={id}>
          <p>
            <span>{name}:</span>
            <span>{phone}</span>
          </p>
      <button className={css.DelContact} onClick={() => handleDeleteContact(id)}
        type="button">
            Delete
          </button>
        </div>
  );
};

ContactsListElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

