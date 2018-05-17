import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => (
  <div className={cx('header')}>
    <div className={cx('contents')}>
      <Link to="/" className={cx('logo')}>
        Yolo Holo
      </Link>
      <div className={cx('center')}>
      </div>
      <div className={cx('right')}>
        <Button to="/auth/login">로그인/회원가입</Button>
      </div>
    </div>
  </div>
);

export default Header;