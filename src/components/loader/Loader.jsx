import React from 'react';
import { BeatLoader } from 'react-spinners';
import styled from 'styled-components';

const Loader = () => {
  return <BeatLoader color="lightblue" size={8.5} />;
};

export const LoaderBig = () => {
  return (
    <StyledContainer>
      <BeatLoader color="lightblue" size={100} />
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loader;
