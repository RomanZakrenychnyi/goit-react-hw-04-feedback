import PropTypes from 'prop-types';
import style from './FeedbackOption.module.css';

export const FeedbackOption = ({ onLeaveFeedback }) => {
  return (
    <>
      <div className={style.container}>
        <button onClick={onLeaveFeedback} className={style.btn} type="button" name="good">Good</button>
        <button onClick={onLeaveFeedback} className={style.btn} type="button" name="neutral">Neutral</button>
        <button onClick={onLeaveFeedback} className={style.btn} type="button" name="bad">Bad</button>
      </div>
    </>
  );
};

FeedbackOption.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
