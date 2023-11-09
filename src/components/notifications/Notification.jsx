import propTypes from 'prop-types';
import styled from 'styled-components';

const Notification = ({ message }) => {
  return <StyledMessage>{message}</StyledMessage>;
};

const StyledMessage = styled.p`
  max-width: 420px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  padding: 5px 10px;
  margin: 0 auto;
`;

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;
