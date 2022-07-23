import PropTypes from 'prop-types';

export const FeedbackOptions = ({ addFeedback }) => {
  return (
    <div>
      <button name="good" onClick={addFeedback}>
        Good
      </button>
      <button name="neutral" onClick={addFeedback}>
        Neutral
      </button>
      <button name="bad" onClick={addFeedback}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  addFeedback: PropTypes.func,
};
