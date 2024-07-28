import PropTypes from "prop-types";
import css from "./Options.module.css";
const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={css.buttonContainer}>
      <button
        className={css.optionsButton}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.optionsButton}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.optionsButton}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={css.optionsButton}
          onClick={() => resetFeedback("reset")}
        >
          Reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  resetFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.func.isRequired,
  updateFeedback: PropTypes.func.isRequired,
};
export default Options;
