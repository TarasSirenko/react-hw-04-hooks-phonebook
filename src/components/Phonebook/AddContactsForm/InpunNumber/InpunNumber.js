import React from 'react';
import s from './InpunNumber.module.css';

export default function InpunNumber({ onChange, inputValue }) {
  return (
    <label className={s.Lable}>
      Number
      <input
        className={s.Input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onChange}
        value={inputValue}
      />
    </label>
  );
}
