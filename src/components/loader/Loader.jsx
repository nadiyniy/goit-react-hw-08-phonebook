import React from 'react';
import { BarLoader } from 'react-spinners';
import styled from 'styled-components';

const Loader = () => {
  return <BarLoader color="lightblue" width={39} />;
};

export const LoaderBig = () => {
  return (
    <StyledContainer>
      <BarLoader color="lightblue" size={100} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loader;
