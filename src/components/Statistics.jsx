import PropTypes from 'prop-types';

import { StatsTitle, StatsItem, StatsItemWrapper, Value } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercent}) => {
    return(
        <div>
          <StatsTitle>Statistics</StatsTitle>
          <StatsItemWrapper>
              <StatsItem>Good: <Value>{good}</Value></StatsItem>
              <StatsItem>Neutral: <Value>{neutral}</Value></StatsItem>
              <StatsItem>Bad: <Value>{bad}</Value></StatsItem>
              <StatsItem>Total: <Value>{total}</Value></StatsItem>
              <StatsItem>Positive feedback: <Value>{positivePercent}%</Value></StatsItem>
          </StatsItemWrapper>
        </div>
    );
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercent: PropTypes.number,
}