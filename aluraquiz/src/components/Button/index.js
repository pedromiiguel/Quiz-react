/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  border: none;
  margin-top: 20px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  transition-duration: background-color 0.5ms;
  &:hover{
    opacity: 0.9;
  }
  &:disabled{
    opacity: 0.5;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']),
  children: PropTypes.node.isRequired,
};

export default Button;
