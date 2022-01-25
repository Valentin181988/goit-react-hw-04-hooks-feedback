/* export const App = () => {
  return <>React homework template</>;
}; */

import './App.css';
import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import { Section } from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };

  handleLiveFeedback = (value) => {

    if (value === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    };

    if (value === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    };

    if (value === 'bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
     }));
    }

    this.showNotification();
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
      return good + neutral + bad
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    if (good === 0) {
      return 0;
    };

    if (neutral === 0 && bad === 0) {
      return 100;
    };

    return Math.trunc((good / (neutral + bad + good)) * 100);      
  };

  showNotification = () => {
    this.setState(prevState => ({
      visible: true,
    }))
  };

  render() {
    const { visible } = this.state;
    const { good, neutral, bad } = this.state;
        
    return (
        <>
          <Section title="Please leave feedback" good={good}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLiveFeedback={this.handleLiveFeedback} />

            {visible ? (
              <Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={this.countTotalFeedback()}
              positivePercent={this.countPositiveFeedbackPercentage()} />
            ) : (<Notification message="There is no feedback" />)} 

          </ Section>
        </>
    );
  };
}
