import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const OverlayWrapper = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default OverlayWrapper;

const StyledContainer = styled.div`
  padding: ${(props) => props.padding || '5vw'};
  min-height: ${(props) => props.minHeight || '0'};
  border-radius: 15px;
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
