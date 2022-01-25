import './App.css';
import  { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import { Section } from './Section';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleLiveFeedback = (value) => {
    console.log(value)
    if (value === 'good') {
      setGood(prevState => prevState + 1);
    };

    if (value === 'neutral') {
      setNeutral(prevState => prevState + 1);
    };

    if (value === 'bad') {
      setBad(prevState => prevState + 1);
    };

    showNotification();
  };

  const countTotalFeedback = () => {
      return good + neutral + bad
  };

  const countPositiveFeedbackPercentage = () => {

    if (good === 0) {
      return 0;
    };

    if (neutral === 0 && bad === 0) {
      return 100;
    };

    return Math.trunc((good / (neutral + bad + good)) * 100);      
  };

  const showNotification = () => {
    setVisible(true)
  };
        
    return (
        <>
          <Section title="Please leave feedback" good={good}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLiveFeedback={handleLiveFeedback} />

            {visible ? (
              <Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={countTotalFeedback()}
              positivePercent={countPositiveFeedbackPercentage()} />
            ) : (<Notification message="There is no feedback" />)} 

          </ Section>
        </>
    );
};

