import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import './index.css';
import Seo from '../../components/Seo';
import { BookingInfo } from '../../components/Home';
import Svg_logo from '../../assets/images/app/Logo.svg';
import { loadProInfo } from '../../store/actions/pro';
import LoadingSpinner from '../../components/Spinner';

const Home = () => {
  const dispatch = useDispatch();
  const { pro_login } = useParams();
  const pro = useSelector(state => state.pro);

  useEffect(() => {
    dispatch(loadProInfo(pro_login));
  }, [pro_login]);

  return (
    <div data-testid="view-home" className={'view-home'}>
      <Seo title={'Planna Pro'}/>
      <div className={'align-col-middle main pt3 pb10'}>
        <div className={'align-col-middle logo-view'}>
          <img src={Svg_logo}/>
        </div>
        <div className={'calendar-container flex_wrap mt5'}>
          {
            pro.isLoading ?
              <div className={'align-col-middle flex_1'}>
                <LoadingSpinner/>
              </div>
              :
              (pro.proData?.id != null &&
                <>
                  <div className={'info-view ph2 pv3'}>
                    <BookingInfo/>
                  </div>
                  <div className={'align-col-middle calendar-view pl4 pr2 pv3'}>
                    <Outlet/>
                  </div>
                </>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
