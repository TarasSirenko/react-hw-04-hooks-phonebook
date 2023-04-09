import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

export default function ContactList({ contactsList, removeContact }) {
  return (
    <div className={s.Container}>
      <h2 className={s.Title}>Contacts:</h2>
      <ul className={s.ContactList}>
        {contactsList.map(({ name, id, number }) => {
          return (
            <li key={id} className={s.Item}>
              {name}: {number}
              <button
                type="button"
                className={s.Button}
                onClick={() => removeContact(id)}
              >
                Delate
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contactsList: PropTypes.arrayOf(PropTypes.object),
  removeContact: PropTypes.func,
};
