import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';

const SidebarTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);

SidebarTemplate.propTypes = {
  children: PropTypes.array.isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

SidebarTemplate.defaultProps = {
  pageType: 'notes',
};

export default SidebarTemplate;
