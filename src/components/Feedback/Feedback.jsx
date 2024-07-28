import css from "./Feedback.module.css";
import PropTypes from "prop-types";
const Feedback = ({ feedback, posFeedback, totalFeedback }) => {
  return (
    <div className={css.feedbackContainer}>
      <span className={css.feedbackText}>Good:{feedback.good}</span>
      <span className={css.feedbackText}>Neutral:{feedback.neutral}</span>
      <span className={css.feedbackText}>Bad:{feedback.bad}</span>
      <span className={css.feedbackText}>Total point:{totalFeedback}</span>
      <span className={css.feedbackText}>
        Percentage of reviews:{posFeedback}%
      </span>
    </div>
  );
};
Feedback.propTypes = {
  feedback: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  posFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.func.isRequired,
};
export default Feedback;
