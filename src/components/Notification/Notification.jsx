import css from "./Notification.module.css";
import PropTypes from "prop-types";

const Notification = () => {
  return (
    <div className={css.noFeedbackContainer}>
      <span className={css.noFeedbackText}>No feedback yet</span>
    </div>
  );
};
Notification.propTypes = PropTypes.string.isRequired;
export default Notification;
