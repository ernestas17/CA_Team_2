import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: var(--paragraph1);
  padding: 16px 40px;
  border: none;
  border-radius: 12px;
  color: var(--white);
  background-color: ${(props) =>
    props.bgColor === 'primary' ? 'var(--primary)' : 'var(--black)'};

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
