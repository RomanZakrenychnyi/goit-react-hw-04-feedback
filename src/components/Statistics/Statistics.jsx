import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentag }) => (
  <>
    <div className={style.container}>
    <p className={style.value}>Good:<span className={style.span}>{good}</span></p>
    <p className={style.value}>Neutral:<span className={style.span}>{neutral}</span></p>
    <p className={style.value}>Bad:<span className={style.span}>{bad}</span></p>
    </div>
    <div className={style.container}>
      <p className={style.value}>Total:<span className={style.span}>{total}</span></p>
      <p className={style.value}>Positive Feedback:<span className={style.span}>{positivePercentag + '%'}</span></p>
    </div>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.string,
};


// commit for push rep