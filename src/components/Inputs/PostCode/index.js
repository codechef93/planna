import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';
import { Check } from '@styled-icons/entypo';
import './index.css';
import Svg_loc from '../../../assets/images/icons/post-code-icon.svg';
// import { Theme } from '../../../assets';
import { isEmpty } from '../../../utils/common';
import apiRequestGuest from '../../../services/apiRequestGuest';
import { Theme } from '../../../assets';

const PostCode = ({ value, className, style }) => {
  const [post_code, setPostCode] = useState('');
  const [has_valid_postcode, setHasValidPostcode] = useState(null);
  const [is_checking, setChecking] = useState(false);

  useEffect(() => {
    setPostCode(value || '');
  }, [value]);

  const _validateInvitationCode = async () => {
    try {
      setChecking(true);
      const response = await apiRequestGuest({
        method: 'get',
        url: `postcode/address?postcode=${post_code}&fromEPC=false`
      });
      if (response.data && response.data.result && response.data.result.length > 0) {
        setHasValidPostcode(true);
        setChecking(false);
      } else {
        setHasValidPostcode(false);
        setChecking(false);
      }
    } catch (err) {
      setHasValidPostcode(false);
      setChecking(false);
    }
  };

  const _removePostCode = () => {
    setHasValidPostcode(null);
    setPostCode('');
  };

  const _renderInput = () => {
    if (isEmpty(post_code) || is_checking || has_valid_postcode == null) {
      return (
        <div className={'align-row-start post-code-input mb2'}>
          <input
            value={post_code}
            editable={!is_checking}
            placeholder={'Post Code *'}
            onChange={(e) => {
              setPostCode(e.target.value);
            }}
            autoCapitalize={'none'}
            autoCorrect={'none'}
          />
          {post_code != null && post_code.length > 0 && (
            is_checking ? (
              <CircularProgress size={16}/>
            ) : (
              <div className={'check-btn btn-style'} onClick={() => _validateInvitationCode()}>
                Check
              </div>
            )
          )}
        </div>
      );
    }

    if (post_code != null && post_code.length > 0) {
      return (
        <div className={'align-row-start post-code-input mb2'}>
          <div
            className={'align-row-start mr2'}
            style={{ flex: 1, paddingVertical: 18, paddingLeft: 10 }}>
            <div className={'code-text mr2'}
                 style={!has_valid_postcode ? { color: Theme.colors.gray1 } : {}}> {post_code} </div>
            {has_valid_postcode && <Check size={16} color={'#4CD7AD'}/>}
          </div>
          <div className={'remove-btn btn-style'} onClick={() => _removePostCode()}>
            Remove
          </div>
        </div>
      );
    }
  };

  console.log('post_code is_checking ', post_code, is_checking);

  return (
    <div style={style} className={`align-row-start-start post-code-check ${className}`}>
      <img src={Svg_loc} className={'mr2'}/>
      <div className={'flex_1'}>
        {_renderInput()}
        {
          (isEmpty(post_code) || is_checking || has_valid_postcode == null) ?
            <div className={'desc'}>Check if this service is available in your area</div>
            :
            has_valid_postcode == false ?
              <div className={'desc'} style={{ color: '#F1364E' }}>Unfortunately, this service is not available in your
                area</div>
              :
              has_valid_postcode == true &&
              <div className={'desc'} style={{ color: '#4CD7AD' }}>Great news! This service is available in your
                area.</div>
        }
      </div>
    </div>
  );
};

PostCode.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};
export default PostCode;
