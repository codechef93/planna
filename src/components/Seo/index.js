import React from 'react';
import { Helmet } from 'react-helmet';
import { Config } from '../../constants';
import PropTypes from 'prop-types';

export const Seo = ({ title, description }) => {
  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: Config.DEFAULT_SEO_LANG }}
      meta={[
        {
          name: `description`,
          content: description ? description : Config.DEFAULT_SEO_META_DESCRIPTION
        }
      ]}
    />
  );
};

function arePropsEqual(prevProps, nextProps) {
  return prevProps.title === nextProps.title && prevProps.description === nextProps.description;
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};
export default React.memo(Seo, arePropsEqual);
