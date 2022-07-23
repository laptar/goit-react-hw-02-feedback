export const FeedbackOptions = ({ btnGood }) => {
  return (
    <div>
      <button name="good" onClick={btnGood}>
        Good
      </button>
      <button name="neutral" onClick={btnGood}>
        Neutral
      </button>
      <button name="bad" onClick={btnGood}>
        Bad
      </button>
    </div>
  );
};
