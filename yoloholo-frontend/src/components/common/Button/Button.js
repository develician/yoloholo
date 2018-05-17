import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = ({ children, to }) => {
  if (to) {
    return (
      <div className={cx('button-wrapper')}>
        <Link to={to} className={cx('button')}>
          {children}
        </Link>
      </div>
    );
  }
  return (
    <div className={cx('button-wrapper')}>
      <div className={cx('button')}>
        {children}
      </div>
    </div>
  );
}

export default Button;