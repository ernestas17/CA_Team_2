import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  input {
    width: 100%;
    padding: 20px;
    margin-bottom: 2px;
    border-width: 0px;
    border-radius: 2px;
    border: none;
    outline: none;

    background-color: var(
      --${(props) => (props.color === 'lightgrey' ? 'lightgrey' : 'white')}
    );
  }
`;
