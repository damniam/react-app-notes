import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SidebarTemplate from 'templates/SidebarTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const DetailTemplate = ({ children, pageType, title, description, created, url }) => (
  <SidebarTemplate pageType={pageType}>
    <Heading>{title}</Heading>
    <Paragraph>{created}</Paragraph>
    <Paragraph>{description}</Paragraph>
    <Button as={Link} to={`/${pageType}`} activeColor={pageType}>
      Close
    </Button>
    {children}
  </SidebarTemplate>
);

DetailTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  pageType: PropTypes.string.isRequired,
};

export default DetailTemplate;
