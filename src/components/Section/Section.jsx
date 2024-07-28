import PropTypes from "prop-types";
import css from "./Section.module.css";
const Section = ({ children }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>{children}</div>
    </section>
  );
};
Section.prototype = {
  children: PropTypes.element,
};
export default Section;
