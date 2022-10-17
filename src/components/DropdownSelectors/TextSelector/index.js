import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { isEmpty } from '../../../utils/common';
import './index.css';


const TextSelector = ({ values, value, placeholder, style, handleChange }) => {
  const [isOpen, setOpen] = useState(false);

  const { t } = useTranslation();
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const itemList = () => {
    if (values == null) return null;
    const list = values.map((item, index) => (
      <div
        onClick={() => {
          handleChange(item, index);
        }}
        className="text-dropdown-item flex_between"
        key={item.toString()}>
        <h1>{t(item)}</h1>
      </div>
    ));

    return <div className="text-dropdown-items"> {list} </div>;
  };

  return (
    <div
      ref={ref}
      className={isOpen ? 'text-dropdown active' : 'text-dropdown'}
      onClick={() => {
        setOpen(!isOpen);
      }}
      style={style}>
      <div className="text-drop-btn">
        {
          (isEmpty(value) && !isEmpty(placeholder)) ?
            <span className={'placeholder'}>{placeholder}</span>
            :
            <span>{t(value)}</span>
        }
      </div>
      {itemList()}
    </div>
  );
};

TextSelector.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  placeholder : PropTypes.string,
  style: PropTypes.object,
  handleChange: PropTypes.func
};

export default TextSelector;
