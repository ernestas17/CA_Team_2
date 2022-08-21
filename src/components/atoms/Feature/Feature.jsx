import { StyledFeature, StyledIcon, StyledText } from './Feature.styled';

const Feature = ({ icon, bgColor, headline, text }) => {
  return (
    <StyledFeature>
      <StyledIcon bgColor={bgColor}>{icon}</StyledIcon>
      <StyledText>
        <h5>{headline}</h5>
        <p>{text}</p>
      </StyledText>
    </StyledFeature>
  );
};

export default Feature;
