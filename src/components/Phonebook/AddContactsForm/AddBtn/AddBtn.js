import s from './AddBtn.module.css';
import PropTypes from 'prop-types';
import React from 'react';

export default function AddBtn({ onClick }) {
  return (
    <button type="submit" className={s.Button} onClick={onClick}>
      Add contact
    </button>
  );
}

AddBtn.propTypes = {
  onClick: PropTypes.func,
};
