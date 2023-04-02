import { useState } from 'react';
import { FeedbackOption } from './FeedbackOption/FeedbackOption';
import { Section } from './SectionTitle/SectionTitle';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const percentage = Math.round((good / total) * 100);

  const handleUpdate = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        throw new Error("Name doesn't exist");
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOption onLeaveFeedback={handleUpdate} />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentag={percentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
};