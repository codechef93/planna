import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';
import { SearchInput } from '../../Inputs';
import { BuildingShop } from '@styled-icons/fluentui-system-filled';
import { MapMarker } from '@styled-icons/open-iconic';
import { Theme } from '../../../assets';
import { vendors } from '../../../utils/testData';
import { Config, ROUTES_NAMES } from '../../../constants';
import { StarFill } from '@styled-icons/bootstrap';

const VendorSearchInput = ({ style, handleChange }) => {
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);
  const [suggestedList, setSuggestedList] = useState([]);
  const [curVal, setValue] = useState('');

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
    if (suggestedList.length === 0) {
      return null;
    }
    const list = suggestedList.map((item, index) => (
      <div
        onClick={() => {
          setOpen(false);
          setValue(item.title);
          handleChange(item);
        }}
        className="vendor-dropdown-item flex_between"
        key={item.id}
        style={{ borderBottomWidth: index === suggestedList.length - 1 ? 0 : 1 }}>
        <div className={'align-middle vendor-info'}>
          <img src={Config.IMG_BASE_URL + item.logo_thumbnail_path} alt={''} />
          <div style={{}}>
            <p>{item.title}</p>
            <div className={'align-middle rate-item'}>
              <StarFill size={16} color={Theme.colors.gray7} style={{ marginRight: 6 }} />
              <span>{(item.rating_interval / 2).toFixed(1)}</span>
              <MapMarker size={16} color={Theme.colors.gray7} style={{ marginRight: 6 }} />
              <span>{item.distance} Km</span>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div className="vendor-dropdown-items">
        {list}
        <p
          className={'see_all_btn'}
          onClick={(e) => {
            e.preventDefault();
            navigate(ROUTES_NAMES.vendors);
          }}>
          {t('vendor_search.see_all_results')}
        </p>
      </div>
    );
  };

  const _findList = (text) => {
    if (text.length === 0 || text.length > 4) {
      setSuggestedList([]);
      setOpen(false);
      return;
    }
    setSuggestedList(vendors.slice(0, 4 - text.length));
    setOpen(true);
  };

  return (
    <div ref={ref} className={isOpen ? 'vendor-dropdown active' : 'vendor-dropdown'} style={style}>
      <SearchInput
        value={curVal}
        icon={<BuildingShop size={20} color={Theme.colors.gray5} />}
        placeholder={t('vendor_search.search_by_shop_name')}
        onChange={(text) => {
          _findList(text);
        }}
      />
      {itemList()}
    </div>
  );
};

VendorSearchInput.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  style: PropTypes.object,
  handleChange: PropTypes.func
};

export default VendorSearchInput;
