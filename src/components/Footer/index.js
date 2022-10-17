import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_NAMES } from '../../constants';
import Svg_facebook from '../../assets/images/social/Facebook_white.svg';
import Svg_twitter from '../../assets/images/social/Twitter_white.svg';
import Svg_instagram from '../../assets/images/social/Instagram_white.svg';
import Svg_appstore from '../../assets/images/social/AppStore_white.svg'
import Svg_googleplay from '../../assets/images/social/GooglePlay_white.svg';
import ImgLogo from '../../assets/images/app/logo-full.png';
import './index.css';
import { Grid } from '@mui/material';

const Footer = () => {
  const DISCOVER_LINKS = [
    {
      label: 'Become a Pro',
      link: ROUTES_NAMES.terms
    },
    {
      label: 'Services by City',
      link: ROUTES_NAMES.terms
    },
    {
      label: 'All Services',
      link: ROUTES_NAMES.terms
    },
    {
      label: 'Help',
      link: ROUTES_NAMES.terms
    },
  ];
  const COMPANY_LINKS = [
    {
      label: 'About',
      link: ROUTES_NAMES.terms
    },
    {
      label: 'Careers',
      link: ROUTES_NAMES.terms
    },
    {
      label: 'Blogs',
      link: ROUTES_NAMES.terms
    },
    {
      label: 'Terms & Conditions',
      link: ROUTES_NAMES.terms
    },
  ];
  const onLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer pv4" >
      <Grid container spacing={{ xs: 2, md: 5 }}>
        <Grid item xs={12} md={6} lg={3}  >
          <img src={ImgLogo} className={'logo'}/>
          <h5>Where work, works around you.</h5>
          <h6>© 2022 Planna Ltd. All rights reserved.</h6>
        </Grid>
        <Grid item xs={6} md={6} lg={3} style={{}}>
          <h4 className="subject">Discover</h4>
          <ul>
            {DISCOVER_LINKS.map((linkItem) => (
              <li key={linkItem.label}>
                <Link to={linkItem.link} onClick={onLinkClick}>
                  {linkItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={6} md={6} lg={3} style={{}}>
          <h4 className="subject">Company</h4>
          <ul>
            {COMPANY_LINKS.map((linkItem) => (
              <li key={linkItem.label}>
                <Link to={linkItem.link} onClick={onLinkClick}>
                  {linkItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={12} md={6} lg={3} style={{}}>
          <div className={'align-row-start apps'}>
            <a
              href="https://www.instagram.com//"
              rel={'noreferrer'}
              target="_blank"
            >
              <img src={Svg_appstore} />
            </a>
            <a
              href="https://www.facebook.com//"
              rel={'noreferrer'}
              target="_blank"
              className={'ml2'}
            >
              <img src={Svg_googleplay} />
            </a>
          </div>
          <div className={'align-row-start social mt2'}>
            <a
              href="https://www.instagram.com//"
              rel={'noreferrer'}
              target="_blank"
            >
              <img src={Svg_instagram} />
            </a>
            <a
              href="https://www.facebook.com//"
              rel={'noreferrer'}
              target="_blank"
            >
              <img src={Svg_facebook} />
            </a>
            <a
              href="https://twitter.com/?lang=en"
              rel={'noreferrer'}
              target="_blank"
            >
              <img src={Svg_twitter} />
            </a>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
