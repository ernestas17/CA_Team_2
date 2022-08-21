import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constant/breakpoints';

export const StyledTestimonialsSection = styled.section`
  background-color: var(--lightgrey);
`;

export const StyledTestimonialsSectionWrapper = styled.section`
  width: 1320px;
  margin: 0 auto;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;

  h3 {
    width: 80%;
    font-size: var(--heading3);
    text-align: center;
    align-self: center;
    padding-bottom: 60px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 120px 20px;
  }
`;

export const StyledTestimonialsCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row;
  }
`;

export const StyledTestimonialsPaginationContainer = styled.div`
  display: flex;
`;

export const StyledTestimonialsLinesContainer = styled.div`
  display: flex;
  gap: 10px;
  align-self: center;
  padding-top: 40px;
`;

export const StyledTestimonialsButtonsContainer = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 15px;
  padding-top: -30px;
`;

export const StyledTestimonialsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  background-color: ${(props) =>
    props.bgColor === 'white' ? 'var(--white)' : 'var(--black)'};
  border-radius: 50%;
  cursor: pointer;
`;
