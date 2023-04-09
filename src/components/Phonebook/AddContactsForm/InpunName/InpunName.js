import React from 'react';
import PropTypes from 'prop-types';

import s from './InpunName.module.css';

export default function InpunName({ onChange, inputValue }) {
  return (
    <label className={s.Lable}>
      Name
      <input
        className={s.Input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
        value={inputValue}
      />
    </label>
  );
}

InpunName.propTypes = {
  onChange: PropTypes.func,
  inputValue: PropTypes.string,
};
