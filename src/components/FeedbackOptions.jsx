import PropTypes from "prop-types";
import { FeedbackButtons } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({options, onLiveFeedback}) => {
    
    return(
        <div>
            {options.map(option => <FeedbackButtons key={option} type="button" onClick={() => onLiveFeedback(option)}>{option}</FeedbackButtons>)}
        </div>
    );
};

FeedbackOptions.propTypes = {
    onLiveFeedback: PropTypes.func,
    options: PropTypes.array,
}