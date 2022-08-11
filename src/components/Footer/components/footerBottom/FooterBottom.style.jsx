import styled from 'styled-components';

export const StyledFooterBottomWrapper = styled.div`
  background-color: #1e1b1b;
`;

export const StyledFooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 90%;

  p {
    color: #939191;
    margin-bottom: 30px;
  }

  @media (min-width: 768px) {
    justify-content: center;
  }

  @media (min-width: 1080px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1280px;
    height: 160px;
    margin-bottom: 0px;

    p {
      margin-bottom: 0px;
    }
  }
`;

export const StyledFooterBottomLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 18%;
  margin-top: 2em;

  img {
    width: 121px;
    height: 27px;
  }

  @media (min-width: 768px) {
    width: 30%;
  }

  @media (min-width: 1080px) {
    justify-content: flex-start;
    width: 18%;
    margin-top: 0;
  }
`;

export const StyledFooterNavigation = styled.div`
  margin-top: 30px;

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    margin-bottom: 30px;
    padding: 0px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  @media (min-width: 1080px) {
    width: 35%;
    margin-top: 0;

    ul {
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 0px;
    }
  }
`;
