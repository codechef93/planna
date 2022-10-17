import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from '@styled-icons/typicons';
import { FormControlLabel, Checkbox } from '@mui/material';
import './index.css';
import { setAppHeaderClass } from '../../../store/actions/app';
import { Theme } from '../../../assets';
import { MainBtn, RoundIconBtn, OutlineBtn } from '../../../components/Buttons';
import { FormInput } from '../../../components/Inputs';
import { ROUTES_NAMES } from '../../../constants';

const PaymentInfo = () => {
  const navigate = useNavigate();
  const { proData } = useSelector(state => state.pro);

  const [state, setState] = useState({
    firstName: '',
    lastName : '',
    phone : '',
    email: '',
    postcode : ''
  });
  const [samehomeaddr, setSameHomeAddress] = useState(false);

  const onHandleChange=(e)=>{
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const onContinue = () => {
    navigate(`/${proData?.user?.login}/` + ROUTES_NAMES.confirmBooking);
  };

  return (
    <div className={'align-col-middle payment-add-view'}>
      <div className={'row'}>
        <div className={'align-middle head-nav'}>
          <RoundIconBtn
            icon={<ArrowLeft size={18} color={Theme.colors.gray1}/>}
            onClick={() => navigate(-1)}
          />
          <h5>Payment</h5>
        </div>
      </div>
      <div className={'row mt4 ph1'}>
        <p className={'subject-title'}>Personal Details</p>
      </div>
      <div className={'row'}>
        <div className={'col-item'}>
          <FormInput
            error={''}
            required={true}
            label="First Name"
            name={'firstName'}
            value={state.firstName}
            onChange={onHandleChange}
          />
        </div>
        <div className={'col-item'}>
          <FormInput
            error={''}
            required={true}
            label="Last Name"
            name={'lastName'}
            value={state.lastName}
            onChange={onHandleChange}
          />
        </div>
      </div>
      <div className={'row'}>
        <div className={'col-item'}>
          <FormInput
            error={''}
            required={true}
            label="Mobile Phone Number"
            name={'phone'}
            value={state.phone}
            onChange={onHandleChange}
          />
        </div>
        <div className={'col-item'}>
          <FormInput
            error={''}
            required={true}
            label="Email"
            name={'email'}
            value={state.email}
            onChange={onHandleChange}
          />
        </div>
      </div>
      <div className={'row'}>
        <div className={'col-item'}>
          <FormInput
            error={''}
            required={true}
            label="Enter your postcode"
            name={'postcode'}
            value={state.postcode}
            onChange={onHandleChange}
          />
        </div>
        <div className={'col-item'}>
        </div>
      </div>
      <div className={'row mt3 ph1'}>
        <p className={'subject-title'}>Payment Method</p>
      </div>
      <div className={'row'}>
        <div className={'col-item'}>
          <FormInput
            error={''}
            required={true}
            label="Card Type"
            name={'firstName'}
            value={state.firstName}
            onChange={onHandleChange}
          />
        </div>
        <div className={'col-item'}>
          <FormInput
            error={''}
            required={true}
            label="Cardholder name"
            name={'lastName'}
            value={state.lastName}
            onChange={onHandleChange}
          />
        </div>
      </div>
      <div className={'row'}>
        <div className={'col-item'}>
          <FormInput
            error={''}
            required={true}
            label="Card Number"
            name={'firstName'}
            value={state.firstName}
            onChange={onHandleChange}
          />
        </div>
        <div className={'col-item'} style={{padding: 0}}>
          <div className={'row'}>
            <div className={'col-item'}>
              <FormInput
                error={''}
                required={true}
                label="Expiry Date"
                name={'firstName'}
                value={state.firstName}
                onChange={onHandleChange}
              />
            </div>
            <div className={'col-item'}>
              <FormInput
                error={''}
                required={true}
                label="CVV"
                name={'lastName'}
                value={state.lastName}
                onChange={onHandleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={'row'}>
        <div className={'col-item'}>
          <FormControlLabel
            className={'same-homeaddress'}
            control={
              <Checkbox checked={samehomeaddr} onChange={(e)=>{setSameHomeAddress(e.target.checked)}} />
            }
            label="Same as home address?"
          />
          <FormInput
            error={''}
            required={true}
            label="Enter your postcode"
            name={'firstName'}
            value={state.firstName}
            onChange={onHandleChange}
          />
        </div>
      </div>
      <div className={'row'}>
        <p className={'desc'}>*Payment will be pre-authorised once your appoinment has been confirmed.<br/> Your card will be charged upon completion of the service. </p>
      </div>
      <div className={'flex_1 row bottom mt4'}>
        <OutlineBtn
          className={'cancel-btn'}
          title={'Cancel'}
          onClick={() => navigate(-1)}
        />
        <div style={{width: 10}}/>
        <MainBtn
          className={'continue-btn'}
          title={'Continue'}
          onClick={onContinue}
        />
      </div>
    </div>
  );
};

PaymentInfo.propTypes = {
  isLoggedIn: PropTypes.bool,
  setAppHeaderClass: PropTypes.func
};

const mapStateToProps = ({ app }) => ({
  user: app.user || {},
  isLoggedIn: app.isLoggedIn
});

export default connect(mapStateToProps, {
  setAppHeaderClass
})(PaymentInfo);
