import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
  max-width: 316px;
  height: 232px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--white);

  cursor: pointer;

  :hover {
    background-color: var(--primary);
    color: white;

    svg {
      color: white;
    }
  }
`;

export const StyledCardTextWrapper = styled.div`
  font-size: var(--title2);
  text-align: center;
`;
