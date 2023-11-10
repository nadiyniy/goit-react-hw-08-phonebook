import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
`;
export const StyledForm = styled(motion.form)`
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  padding: 5px 10px;
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  input {
    height: 40px;
    padding: 5px 15px;
    max-width: 420px;
    border-radius: 10px;
    border: 1px solid black;
  }
  button {
    width: 120px;
    height: 40px;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    height: 28px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid black;
    background-color: white;

    &:hover,
    &:focus {
      box-shadow: 0 0 1px 1px black;
    }
  }

  h1 {
    border-bottom: 2px solid black;
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
export const StyledImageContainer = styled(motion.div)`
  max-width: 300px;
  @media screen and (max-width: 767.98px) {
    display: none;
  }
`;
