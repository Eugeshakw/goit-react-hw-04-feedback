import React from "react";
import style from './statistics.module.scss';
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positiveFeedbackPercentage}) => {
    return (
        <div className={style.confeedback}>
            <p className={style.statfeedback}>Good: {good} </p>
            <p className={style.statfeedback}>Neutral: {neutral} </p>
            <p className={style.statfeedback}>Bad: {bad}</p>
            <p className={style.statfeedback}>Total:{total}</p>
            <p className={style.statfeedback}>Positive feedback: {positiveFeedbackPercentage.toFixed()}%</p>
        </div>
    )
}

export default Statistics;

Statistics.propTypes={
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedbackPercentage: PropTypes.number.isRequired,

};