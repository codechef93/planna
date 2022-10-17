import React from 'react';
import { Header, Footer } from '../components';
import AppRoutes from './appRoutes';
import ScrollToTop from '../components/Common/scrollToTop';

const AppContainer = () => {
  return (
    <>
      <ScrollToTop />
      <Header/>
      <AppRoutes/>
      <Footer/>
    </>
  );
};

export default AppContainer;
