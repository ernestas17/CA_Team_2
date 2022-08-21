import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constant/breakpoints';

export const StyledTestimonialsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
  gap: 20px;

  background-color: var(--white);

  h5 {
    font-size: var(--title2);
  }

  span {
    color: var(--darkgrey);
  }

  p {
    font-size: var(--title2);
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 70px;
  }
`;

export const StyledPersonInfoContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledImageContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background-image: ${(props) =>
    props.image ? `url(${props.image})` : `url("")`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
