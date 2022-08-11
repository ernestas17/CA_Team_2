import styled from 'styled-components';

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
`;

export const StyledHeaderMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  .mobile-menu {
    img {
      width: 40px;
    }
  }

  @media (min-width: 768px) {
    .mobile-menu {
      display: none;
    }
  }
`;

export const StyledHeaderNavigation = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
  @media (min-width: 1080px) {
    gap: 40px;
  }
`;

export const StyledHeaderMenuItem = styled.li`
  list-style: none;
  font-size: var(--paragraph2);

  a {
    text-decoration: none;
    color: var(--black);
    cursor: pointer;
  }

  a:hover {
    opacity: 0.6;
  }
`;

export const StyledHeaderAssistance = styled.div`
  display: none;

  @media (min-width: 768px) {
    border-left: 1px solid var(--steelgrey);
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 35px;
    text-align: center;
    font-size: var(--paragraph2);
    color: var(--black);

    .icon-container {
      display: flex;
      align-items: center;
    }

    .grey-text {
      font-size: var(--caption);
      letter-spacing: 1.1px;
      line-height: 22px;
      opacity: 0.7;
    }
  }
`;
