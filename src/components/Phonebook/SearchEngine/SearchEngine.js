import React from 'react';
import PropTypes from 'prop-types';
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

SearchEngine.propTypes = {
  filter: PropTypes.string,
  onInputChange: PropTypes.func,
};
