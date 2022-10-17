import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import Svg_Leaves from '../../../assets/images/app/Leaves.svg';
import Svg_time from '../../../assets/images/icons/time-icon.svg';
import Svg_pound from '../../../assets/images/icons/pound-coin-icon.svg';
import Svg_video from '../../../assets/images/icons/video-icon.svg';
import Svg_desc from '../../../assets/images/icons/description-icon.svg';
import { Theme } from '../../../assets';
import MoreorlessView from '../../Common/MoreorlessView';
import PostCode from '../../Inputs/PostCode';
import { getRate } from '../../../utils/helper';
import { setCurProService } from '../../../store/actions/pro';

const discounts = [
  { cnt: 1, value: 220 }, { cnt: 5, value: 210 }, { cnt: 10, value: 200 }, { cnt: 15, value: 190 },
  { cnt: 20, value: 180 }, { cnt: 25, value: 170 }, { cnt: 30, value: 160 }, { cnt: 35, value: 150 }
];
const packages = ['Hedge cutting', 'Tree and shrub pruning', 'Deadheading', 'Weeding', 'Feeding plants with organic liquid feed', 'Lawn mowing', 'Jet wash of decking and paving'];

const BookingInfo = () => {
  const dispatch = useDispatch();
  const pro = useSelector(state => state.pro);
  const rate = useMemo(() => getRate(pro.curService), [pro.curService])

  console.log(pro);
  const _renderDetailsInfo = () => {
    if (pro.curService?.title == "Ask a Pro" || pro.curService == 1) {
      return (
        <>
          <div className={'align-row-start mt3'}>
            <img src={Svg_time}/>
            <p className={'desc ml2'}>{rate?.duration} mins</p>
          </div>
          <div className={'align-row-start mt3'}>
            <img src={Svg_pound}/>
            <p className={'desc ml2'}>£{rate?.cost}</p>
          </div>
          <div className={'align-row-start mt3'}>
            <img src={Svg_video}/>
            <p className={'desc ml2'}>Virtual Appointment details provided upon Pro confirmation.</p>
          </div>
          <div className={'align-row-start mt3'}>
            <img src={Svg_desc}/>
            <p className={'desc ml2'}>On-demand expert help and advice</p>
          </div>
        </>
      );
    } else if (pro.curService == 2) { // summer package
      return (
        <>
          <div className={'align-row-start mt3'}>
            <img src={Svg_time} className={'mr2'}/>
            <p className={'desc'}>9th - 27th May</p>
          </div>
          <div className={'align-row-start-start mt3'}>
            <img src={Svg_pound} className={'mr2'}/>
            <div className={'flex_1'}>
              <p className={'desc'} style={{ color: Theme.colors.primary }}>Collective Discount Available</p>
              <MoreorlessView className={'mt1'}>
                <div className={'w100'}>
                  {
                    discounts.map((discount) =>
                      <div key={discount.cnt} className={'align-row-start w100 mt1'}>
                        <div className={'flex_1 discount_label'}>Price for ${discount.cnt} customer</div>
                        <div className={'discount_value'}>£{discount.value}</div>
                      </div>
                    )
                  }
                </div>
              </MoreorlessView>
            </div>
          </div>
          <div className={'align-row-start-start mt3'}>
            <img src={Svg_desc} className={'mr2'}/>
            <div className={'flex_1'}>
              <p className={'desc'}>Recommended once a year in the Spring or Summer. Complete garden tidy, front and
                back.</p>
              <MoreorlessView className={'mt2'}>
                <div className={'w100'}>
                  <div className={'discount_label'}>Package includes:</div>
                  {
                    packages.map((item) =>
                      <div key={item} className={'align-row-start w100 mt1'}>
                        <div className={'dot mr1'}/>
                        <div className={'discount_value'}>{item}</div>
                      </div>
                    )
                  }
                  <div className={'align-row-start-start mt2 package-highlighted'}>
                    <div className={'mr1'}>*</div>
                    <div>
                      We only use organic products and avoid using any unnatural chemicals in the garden.
                    </div>
                  </div>
                </div>
              </MoreorlessView>
            </div>
          </div>
          <div className={'align-row-start mt3'}>
            <PostCode/>
          </div>
        </>
      );
    } else { // call out
      return (
        <>
          <div className={'align-row-start mt3'}>
            <img src={Svg_time}/>
            <p className={'desc ml2'}>1 hour</p>
          </div>
          <div className={'align-row-start mt3'}>
            <img src={Svg_pound}/>
            <p className={'desc ml2'}>£100</p>
          </div>
          <div className={'align-row-start mt3'}>
            <img src={Svg_desc}/>
            <p className={'desc ml2'}>Home visit. Cost is for the first hour only.</p>
          </div>
          <div className={'align-row-start mt3'}>
            <PostCode/>
          </div>
        </>
      );
    }
  };

  return (
    <div className={'booking-info-view'}>
      <div className={'align-middle title-view pb3'}>
        <img src={Svg_Leaves} className={'mr2'}/>
        <h5>The Conscious Gardening Co.</h5>
      </div>
      <div className={'services'}>
        <p>Service Needed</p>
        <div className={'w100 flex_wrap items'}>
          {
            (pro.services || []).map((service) =>
              <div key={service.id}
                   className={service.id == pro.curService?.id ? 'service-item-active' : 'service-item-inactive'}
                   onClick={() => {
                     if (pro.services?.length > 1) {
                       dispatch(setCurProService(service));
                     }
                   }}
              >{service.title}</div>
            )
          }
        </div>
      </div>
      <div className={'service-detail'}>
        {
          (pro.curService?.title == "Ask a Pro" || pro.curService == 1) ?
            <h5>{rate?.duration} minute video consulation with {pro.proData?.user?.firstName} {pro.proData?.user?.lastName}</h5>
            :
            pro.curService == 2 ?
              <h5>Summer Garden Tidy-Up Package With {pro.proData?.user?.firstName} {pro.proData?.user?.lastName}</h5>
              :
              <h5>1 hour meeting with {pro.proData?.user?.firstName} {pro.proData?.user?.lastName}</h5>
        }
        <div className={'align-row-start w100 pro'}>
          <img src={pro.proData?.user?.imageUrl}/>
          <div className={'ml2'}>
            <h6>{pro.proData?.user?.firstName} {pro.proData?.user?.lastName}</h6>
            <p>View Profile</p>
          </div>
        </div>
        {_renderDetailsInfo()}
      </div>
    </div>
  );
};

export default BookingInfo;
