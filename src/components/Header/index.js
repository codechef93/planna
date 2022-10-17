import React from 'react';
import './index.css';
import {Menu} from '@styled-icons/heroicons-outline';
import { Theme } from '../../assets';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleSideBar } from '../../store/actions/app';
import Svg_logo from '../../assets/images/app/Logo.svg';

const Header = ({ headerClass, toggleSideBar,  hasBorderBottom = false }) => {
  return (
    <div
      className={
        'header ' +
        (hasBorderBottom ? 'header-bottom-border' : '') +
        ' ' + headerClass
      }>
      <div className={'align-row-start left-side'}>
        <img src={Svg_logo} className={'logo'}/>
      </div>
      <div className={'right-side'}>
        <div className={'align-middle signin-view'}>
          <Button
            className={'signin-btn'}
            onClick={(e) => {
              e.preventDefault();
              toggleSideBar();
            }}>
            Sign up/Login
          </Button>
          <Button
            className={'pro-register-btn'}
            onClick={(e) => {
              e.preventDefault();
              toggleSideBar();
            }}>
            Become a Pro
          </Button>
        </div>
        <Button
          className={'drawerBtn'}
          onClick={(e) => {
            e.preventDefault();
            toggleSideBar();
          }}>
          <Menu color={Theme.colors.text} size={28} />
        </Button>
      </div>
    </div>
  );
};

Header.propTypes = {
  headerClass: PropTypes.string,
  user: PropTypes.shape({
    full_name: PropTypes.string,
    photo: PropTypes.string
  }),
  isLoggedIn: PropTypes.bool,
  toggleSideBar: PropTypes.func,
  hasBorderBottom: PropTypes.bool
};

function mapStateToProps({ app }) {
  return {
    user: app.user,
    isLoggedIn: app.isLoggedIn,
    hasVerifiedPhone: app.hasVerifiedPhone,
    isSidebarOpened: app.isSidebarOpened,
    headerClass: app.headerClass
  };
}

export default connect(mapStateToProps, {
  toggleSideBar
})(Header);
