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
  padding: 20px 10px;
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
    position: relative;
    p {
      position: absolute;
      bottom: -11px;
      right: 0;
      color: #ff0000;
      font-size: 14px;
    }
    input {
      height: 40px;
      font-size: 20px;
      padding: 5px 15px;
      max-width: 420px;
      border-radius: 10px;
      border: none;
      margin-bottom: 10px;
    }
    input:invalid {
      border: 2px solid red;
    }
  }

  span {
    text-align: center;
    a {
      color: blue;
    }
  }

  button {
    width: 120px;
    font-size: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: white;

    &:hover,
    &:focus {
      background-color: #f1f1f1;
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
  display: flex;
  width: 300px;
  min-height: 562px;
  @media screen and (max-width: 767.98px) {
    display: none;
  }
`;
