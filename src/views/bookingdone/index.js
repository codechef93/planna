import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.css';
import Seo from '../../components/Seo';
import { setAppHeaderClass } from '../../store/actions/app';
import PropTypes from 'prop-types';
import { ArrowRightShort } from '@styled-icons/bootstrap';
import Button from '@mui/material/Button';
import Svg_logo from '../../assets/images/app/Logo.svg';
import Svg_mail from '../../assets/images/app/mail.svg';
import Svg_facebook from '../../assets/images/social/Facebook.svg';
import Svg_twitter from '../../assets/images/social/Twitter.svg';
import Svg_instagram from '../../assets/images/social/Instagram.svg';
import Svg_appstore from '../../assets/images/social/AppStore.svg';
import Svg_googleplay from '../../assets/images/social/GooglePlay.svg';
import { ROUTES_NAMES } from '../../constants';
import { Theme } from '../../assets';

const BookingDone = (props) => {
  useEffect(() => {
    // props.setAppHeaderClass('app-home-header');
    return () => {
      props.setAppHeaderClass('');
    };
  }, []);

  return (
    <div className={'booking-done'}>
      <Seo title={'Planna Pro'}/>
      <div className={'align-col-middle main pt3 pb10'}>
        <div className={'align-col-middle logo-view'}>
          <img src={Svg_logo}/>
        </div>
        <div className={'content flex_wrap mt5'}>
          <div className={'info-view pl2 pr4 pv3'}>
            <h3>Sent!</h3>
            <h6 className={'mt2'}>We’ll let you know once Cameron has confirmed the appointment.</h6>
            <p className={'hide-md mt4'}>Share the link below with your neighbours for even bigger discounts on services and
              packages with The
              Conscious Gardening Co.</p>
            <div className={'show-md align-row-start social mt4'}>
              <a
                href="https://www.instagram.com//"
                rel={'noreferrer'}
                target="_blank"
                className={'mr3'}
              >
                <img src={Svg_instagram}/>
              </a>
              <a
                href="https://www.facebook.com//"
                rel={'noreferrer'}
                target="_blank"
                className={'mr3'}
              >
                <img src={Svg_facebook}/>
              </a>
              <a
                href="https://twitter.com/?lang=en"
                rel={'noreferrer'}
                target="_blank"
                className={'mr3'}
              >
                <img src={Svg_twitter}/>
              </a>
            </div>
            <div className={'align-middle universal-link-view mt5'}>
              <input value={'planna.pro/theconsciousgardeningco'} editable={false}/>
              <Button
                variant="contained"
                className={'copy-btn'}
                onClick={() => {
                }}>
                Copy
              </Button>
            </div>
            <div className={'show-md img-view align-col-middle mv10'}>
              <img src={Svg_mail}/>
            </div>
            <div className={'hide-md align-row-start social mt4'}>
              <a
                href="https://www.instagram.com//"
                rel={'noreferrer'}
                target="_blank"
                className={'mr3'}
              >
                <img src={Svg_instagram}/>
              </a>
              <a
                href="https://www.facebook.com//"
                rel={'noreferrer'}
                target="_blank"
                className={'mr3'}
              >
                <img src={Svg_facebook}/>
              </a>
              <a
                href="https://twitter.com/?lang=en"
                rel={'noreferrer'}
                target="_blank"
                className={'mr3'}
              >
                <img src={Svg_twitter}/>
              </a>
            </div>
            <div className={'align-start apps  mt4 mb4'}>
              <div className={'align-col-middle'}>
                <div className={'align-middle'}>
                  <a
                    href="https://www.instagram.com//"
                    rel={'noreferrer'}
                    target="_blank"
                  >
                    <img src={Svg_appstore}/>
                  </a>
                  <a
                    href="https://www.facebook.com//"
                    rel={'noreferrer'}
                    target="_blank"
                    className={'ml2'}
                  >
                    <img src={Svg_googleplay}/>
                  </a>
                </div>
                <div className={'hide-md align-middle desc mt2'}>
                  Available for iOS and Android
                </div>
              </div>
            </div>
            <div className={'align-middle w100 link-wrapper'} >
              <Link to={ROUTES_NAMES.home} className={'home-link'}>Go to Home <ArrowRightShort size={22}
                                                                                               color={Theme.colors.primary}/></Link>
            </div>

          </div>
          <div className={'hide-md align-col-middle img-view pl4 pr2 pt5 pb3'}>
            <img src={Svg_mail}/>
          </div>
        </div>
      </div>
    </div>
  );
};

BookingDone.propTypes = {
  isLoggedIn: PropTypes.bool,
  setAppHeaderClass: PropTypes.func
};

const mapStateToProps = ({ app }) => ({
  user: app.user || {},
  isLoggedIn: app.isLoggedIn
});

export default connect(mapStateToProps, {
  setAppHeaderClass
})(BookingDone);
