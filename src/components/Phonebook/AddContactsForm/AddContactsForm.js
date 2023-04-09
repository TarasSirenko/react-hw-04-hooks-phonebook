import s from './AddContactsForm.module.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import AddBtn from './AddBtn/AddBtn';
import InpunName from './InpunName/InpunName';
import InpunNumber from './InpunNumber/InpunNumber';

export default function AddContactsc({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    addContact({ id: shortid.generate(), name, number });
    setName('');
    setNumber('');
  };
  const getCurrentValue = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;

      default:
        break;
    }
  };

  return (
    <form className={s.AddContactscContainer} onSubmit={onSubmit}>
      <InpunName onChange={getCurrentValue} inputValue={name} />
      <InpunNumber onChange={getCurrentValue} inputValue={number} />
      <AddBtn />
    </form>
  );
}

AddContactsc.propTypes = {
  addContact: PropTypes.func,
};
