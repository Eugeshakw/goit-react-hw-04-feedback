// import React from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import style from './feedbackOption.module.scss'
const FeedBackOptions = ({ onLeaveFeedback, option }) => {
  return (
    <div className={style.containerbtn}>
      {option.map(feedback => (
        <button
          className={style.btnfeedback}
          type="button"
          key={nanoid()}
          onClick={() => onLeaveFeedback(feedback)}
        >
          {feedback}
        </button>
      ))}
    </div>
  );
};

export default FeedBackOptions;

FeedBackOptions.propTypes ={
  onLeaveFeedback: PropTypes.func.isRequired,
  option: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}
