import React from "react";
import PropTypes from 'prop-types';
import styles from "./Button.module.css";

const propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['success', 'info', 'danger'])
}

const defaultProps = {
  variant: 'info'
}

const Component = ({ label, variant, ...rest }) => (
  <button {...rest} className={[styles.base, styles[variant]].join(' ')}>
    {label}
  </button>
);

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

export default Component;
