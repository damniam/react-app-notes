import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import { addItem } from 'action';
import { Formik, Form } from 'formik';

const StyledWrapper = styled.div`
  width: 680px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 50px 60px 0px 70px;
  z-index: 3;
  border-left: 10px solid ${({ activeColor, theme }) => theme[activeColor]};
  transform: translateX(${({ isVisible }) => (isVisible ? '0%' : '100%')});
  transition: transform 0.3s;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledTextArea = styled(Input)`
  min-height: 360px;
  border-radius: 10px;
  margin: 50px 0;
`;
const StyledHeading = styled(Heading)`
  margin: 50px 0;
`;
const StyledInput = styled(Input)`
  margin-bottom: 40px;
`;
// const StyledTextArea = styled(Input)`
//   min-height: 360px;
//   border-radius: 10px;
// `;
const AddModal = ({ pageType, isVisible, addItem }) => (
  <StyledWrapper isVisible={isVisible} activeColor={pageType}>
    <Heading big>Create new {pageType}</Heading>
    <Formik
      initialValues={{ title: '', content: '', articleUrl: '', twitterName: '', created: '' }}
      onSubmit={(values) => {
        addItem(pageType, values);
        // handleClose();
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <StyledForm>
          <StyledInput
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {pageType === 'twitters' && (
            <StyledInput
              placeholder="twitter name eg. hello_roman"
              type="text"
              name="twitterName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.twitterName}
            />
          )}
          {pageType === 'articles' && (
            <StyledInput
              placeholder="link"
              type="text"
              name="articleUrl"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.articleUrl}
            />
          )}
          <StyledTextArea
            name="content"
            as="textarea"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <Button type="submit" activeColor={pageType}>
            Add Note
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItem(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(AddModal);
