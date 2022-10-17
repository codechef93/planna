import React from 'react';
import Tooltip from 'react-tooltip-lite';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './index.css';
import { InfoCircle } from '@styled-icons/boxicons-solid';
import { Theme } from '../../../assets';

const CommonTooltip = ({ anchor, anchorStyle, title, description, content, style }) => {
  const { t } = useTranslation();
  return (
    <div className={'common_tooltip'} style={style}>
      <Tooltip
        className={'common_tooltip_body'}
        eventOn="onClick"
        eventOff="onMouseOut"
        useHover={false}
        content={
          <div className={'w100'}>
            <h3>{title}</h3>
            {
              content ? content :
                <div className={'align-middle w100 row-item'}>
                  <p>{description}</p>
                </div>
            }
            <div className={'dismiss-btn'}>{t('tooltip.dismiss')}</div>
          </div>
        }
        arrowContent={
          <svg style={{ display: 'block' }} viewBox="0 0 21 11" width="20px" height="10px">
            <path
              d="M0,11 L9.43630703,1.0733987 L9.43630703,1.0733987 C10.1266203,0.3284971 11.2459708,0 11.936284,1.0733987 L20,11"
              style={{ stroke: 'gray', fill: 'white' }}
            />
          </svg>
        }>
        {anchor ? (
          <a style={anchorStyle}> {anchor}</a>
        ) : (
          <InfoCircle size={22} color={Theme.colors.gray7} />
        )}
      </Tooltip>
    </div>
  );
};

function arePropsEqual(prevProps, nextProps) {
  return (
    prevProps.text === nextProps.text &&
    prevProps.title === nextProps.title &&
    prevProps.description === nextProps.description
  );
}

CommonTooltip.propTypes = {
  anchor: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  content : PropTypes.element,
  anchorStyle: PropTypes.object,
  style: PropTypes.object
};

export default React.memo(CommonTooltip, arePropsEqual);
