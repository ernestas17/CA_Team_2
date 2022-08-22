import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constant/breakpoints';

export const StyledHeader = styled.header`
  height: 90px;
  display: flex;
`;

export const StyledHeaderWrapper = styled.div`
  width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);

  a {
    font-size: var(--paragraph1);
    color: var(--black);
    text-decoration: none;
  }
`;

export const StyledHeaderMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  .mobile-menu {
    display: flex;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    .mobile-menu {
      display: none;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    gap: 40px;
  }
`;

export const StyledHeaderAssistance = styled.div`
  display: none;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--black);

    .icon-container {
      display: flex;
      align-items: center;
    }

    p {
      font-size: var(--paragraph1);
    }

    span {
      font-size: 14px;
      letter-spacing: 1.1px;
      line-height: 22px;
      opacity: 0.7;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    border-left: 1px solid var(--steelgrey);
    padding-left: 35px;
  }
`;
