import styled from 'styled-components';

interface StyledProps {
  darkMode?: boolean
};

export default styled.button<StyledProps>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  font-size: 1.5em;
  width: 1.5em;
  height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  cursor: pointer;

  /* border-color: ${props => props.theme.palette[props.darkMode ? 'dark' : 'light']['primary']}; */
  background-color: ${props => props.theme.palette[props.darkMode ? 'dark' : 'light']['secondary']};
  /* font-size: 1em; */
  box-shadow: 0 0 3px 2px ${props => props.theme.palette[props.darkMode ? 'dark' : 'light']['primary-dark']};

  &:hover {
    color: ${props => props.theme.palette[props.darkMode ? 'dark' : 'light']['primary-dark']};
  }
`;