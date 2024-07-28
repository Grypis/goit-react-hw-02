import css from "./Description.module.css";
import PropTypes from "prop-types";
const Description = () => {
  return (
    <div className={css.descriptionContainer}>
      <h2 className={css.descriptionTitle}>Sip Happens Café</h2>
      <p className={css.descriptionParagraf}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};
Description.propTypes = PropTypes.string.isRequired;
export default Description;
