import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
export class App extends Component {
  static defaultProps = {
    feedbackTitle: 'Please leave feedback',
    statisticsTitle: 'Statistics',
  };

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  hendleAddFeedback = evt => {
    const btn = evt.target.name;
    this.setState(prevState => ({ [btn]: prevState[btn] + 1 }));
  };

  render() {
    const { feedbackTitle, statisticsTitle } = this.props;
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={feedbackTitle}>
          <FeedbackOptions btnGood={this.hendleAddFeedback} />
        </Section>
        <Section title={statisticsTitle}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={good + neutral + bad}
            positivePercentage={parseInt((good / (good + neutral + bad)) * 100)}
          />
        </Section>
      </>
    );
  }
}
