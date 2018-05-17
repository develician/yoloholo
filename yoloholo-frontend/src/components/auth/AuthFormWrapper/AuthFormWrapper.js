import React from 'react';
import styles from './AuthFormWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AuthFormWrapper = ({children}) => (
  <div className={cx('wrapper')}>
    {children}
  </div>
);

export default AuthFormWrapper;