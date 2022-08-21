import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constant/breakpoints';

export const StyledFAQSectionCard = styled.div`
  width: 896px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  background-color: var(--white);
`;

export const StyledFAQHeading = styled.div`
  display: flex;
  height: 60px;
  align-items: center;

  h5 {
    font-size: var(--heading6);
  }

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    h5 {
      font-size: var(--title2);
    }
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 51px;
  height: 48px;
  background-color: var(--primary);
  border: none;
  cursor: pointer;
`;

export const StyledFAQSectionText = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-right: 20px;

  p {
    color: var(--darkgrey);
  }
`;
