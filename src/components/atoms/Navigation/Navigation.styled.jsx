import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constant/breakpoints';

export const StyledHeaderNavigation = styled.li`
  display: none;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    display: flex;
    gap: 20px;
    font-size: var(--paragraph2);

    a {
      text-decoration: none;
      color: var(--black);
      cursor: pointer;
    }

    a:hover {
      opacity: 0.6;
    }

    .active {
      color: var(--primary);
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    gap: 40px;
  }
`;
