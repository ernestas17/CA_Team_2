import {
  StyledHeaderSection,
  StyledHeaderTextWrapper,
  StyledOpenWrapper,
  StyledQuickServiceContainer,
  StyledRatingContainer,
  StyledHeaderImageWrapper,
  StyledHeaderImage,
} from './HeaderSection.styled';
import Button from '../../../../components/atoms/Button';
import {
  ClockIcon,
  StarIcon,
  QuickServiceIcon,
} from '../../../../assets/icons/icons';

const HeaderSection = () => {
  return (
    <StyledHeaderSection>
      <StyledHeaderTextWrapper>
        <h1>Get your vehicle service done online at one place</h1>
        <div>
          <Button bgColor={'primary'} text="Book a service" />
        </div>
        <StyledOpenWrapper>
          <ClockIcon fill="var(--steelgrey)" />
          <div>
            <p className="caption">We are open</p>
            <p>Monday to friday 9:00 AM to 10:00 AM</p>
          </div>
        </StyledOpenWrapper>
      </StyledHeaderTextWrapper>
      <StyledHeaderImageWrapper>
        <StyledHeaderImage />
        <StyledQuickServiceContainer>
          <QuickServiceIcon />
          <h6>Quick Service</h6>
        </StyledQuickServiceContainer>
        <StyledRatingContainer>
          <div>
            <h6>4,5/5</h6>
            <p className="caption">Rating</p>
          </div>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon fill="#D7D1C7" />
        </StyledRatingContainer>
      </StyledHeaderImageWrapper>
    </StyledHeaderSection>
  );
};

export default HeaderSection;
