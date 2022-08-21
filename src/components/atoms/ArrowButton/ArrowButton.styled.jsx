import styled from 'styled-components';

export const StyledArrowButton = styled.button`
  display: flex;
  border: none;
  background: none;

  a {
    display: flex;
    align-items: center;
    gap: 20px;
    text-decoration: none;
    font-size: var(--paragraph1);
    color: var(--black);
  }

  a:hover {
    color: ${(props) =>
      props.hoverColor === 'secondary' ? 'var(--secondary)' : 'var(--black)'};
`;
