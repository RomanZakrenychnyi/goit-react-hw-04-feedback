import { Component } from 'react';
import { FeedbackOption } from './FeedbackOption/FeedbackOption';
import { Section } from './SectionTitle/SectionTitle';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleUpdate = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;

      case 'neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        break;
      case 'bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        break;
      default:
        throw new Error("Name doesn't exist");
    }
  };

  calcTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.calcTotal();
    const percentage = ((good / total) * 100).toFixed(0);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOption onLeaveFeedback={this.handleUpdate} />
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
  }
}
