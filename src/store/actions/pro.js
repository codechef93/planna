import ProService from '../../services/apiPro';

export const PRO_SET_LOADING = 'PRO_SET_LOADING';
export const PRO_SET_PROFILE_DATA = 'PRO_SET_PROFILE_DATA';
export const PRO_SET_SERVICES = 'PRO_SET_SERVICES';
export const PRO_SET_CUR_SERVICE = 'PRO_SET_CUR_SERVICE';


export const loadProInfo = (login) => async (dispatch) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    dispatch({
      type: PRO_SET_LOADING,
      payload: true
    });

    try {
      let res = await ProService.ProDetailFromLogin(login);
      let proData = res.data;
      if (proData?.id) {
        res = await ProService.getProServices(proData?.id);
        let services = res.data || [];
        await dispatch({
          type: PRO_SET_SERVICES,
          payload: services
        });
        if (services.length > 0) {
          await dispatch({
            type: PRO_SET_CUR_SERVICE,
            payload: services[0]
          });
        }
      }
      await dispatch({
        type: PRO_SET_PROFILE_DATA,
        payload: proData || {}
      });
      await dispatch({
        type: PRO_SET_LOADING,
        payload: false
      });
      resolve(proData || {});
    } catch (err) {
      console.log('load pro info err ', err);
      dispatch({
        type: PRO_SET_LOADING,
        payload: false
      });
      resolve({});
    }
  });
};

export const setCurProService= (payload) => {
  return { type: PRO_SET_CUR_SERVICE, payload: payload };
};
