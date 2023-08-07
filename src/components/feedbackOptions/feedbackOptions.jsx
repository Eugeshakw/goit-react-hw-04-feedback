import React from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import style from './feedbackOption.module.scss'
import { feedbacks } from 'utils/utils';
const FeedBackOptions = ({ onLeaveFeedback}) => {
  return (
    <div className={style.containerbtn}>
      {Object.keys(feedbacks).map(feedback => (
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
  
}
