import React from 'react';
import s from './SearchEngine.module.css';

export default function SearchEngine({ filter, onInputChange }) {
  return (
    <label className={s.Lable}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={s.SearchFilter}
        value={filter}
        onChange={onInputChange}
      />
    </label>
  );
}
