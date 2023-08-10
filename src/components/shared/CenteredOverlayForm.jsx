// import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import OverlayWrapper from './OverlayWrapper';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

// eslint-disable-next-line react/prop-types
const CenteredOverlayForm = ({ title, children, validated, handleSubmit }) => {
  return (
    <StyledCentralizedContainer>
      <StyledLogo>Dutch Pay</StyledLogo>

      <OverlayWrapper>
        <Container>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <StyledCentralizedContent>
              <Row className="align-items-start">
                <StyledTitle>{title}</StyledTitle>
              </Row>

              <Row className="align-items-start">{children}</Row>

              <Row className="align-items-end">
                <StyledSubmitButton>저장</StyledSubmitButton>
              </Row>
            </StyledCentralizedContent>
          </Form>
        </Container>
      </OverlayWrapper>
    </StyledCentralizedContainer>
  );
};

export default CenteredOverlayForm;

const StyledLogo = styled.h1`
  font-weight: 200;
  letter-spacing: 10px;
`;

const StyledCentralizedContainer = styled(Container)`
  width: 50vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h2`
  font-weight: 700;
  line-height: 40px;
  text-align: right;
  overflow-wrap: break-word;
  word-break: keep-all;
`;

const StyledSubmitButton = styled(Button).attrs({
  type: 'submit',
})`
  background-color: #6610f2;
  border-radius: 8px;
  border: none;

  &:hover {
    background-color: #6610f2;
    filter: brightness(90%);
  }
`;

const StyledCentralizedContent = styled(Row)`
  justify-content: center;
  align-items: center;
  height: 60vh;
`;
