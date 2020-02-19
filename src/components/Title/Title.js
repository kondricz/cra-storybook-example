import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./Title.module.css";

const propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['main', 'sub', 'text'])
}

const defaultProps = {
  variant: 'text'
}

const Component = ({ title, variant }) => (
  <Fragment>
    {
      {
        main: <h1 className={styles[variant]}>{title}</h1>,
        sub: <h3 className={styles[variant]}>{title}</h3>,
        text: <p className={styles[variant]}>{title}</p>
      }[variant]
    }
  </Fragment>
);

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

export default Component;
