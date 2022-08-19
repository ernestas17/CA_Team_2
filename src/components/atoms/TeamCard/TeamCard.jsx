import React from 'react';
import {
  StyledTeamCardWrapper,
  StyledTeamCardTextWrapper,
  StyledTeamCardName,
  StyledTeamCardPosition,
} from './TeamCard.style';

const TeamCard = ({ bgImage, name, position }) => {
  return (
    <StyledTeamCardWrapper bgImage={bgImage}>
      <StyledTeamCardTextWrapper>
        <StyledTeamCardName>{name}</StyledTeamCardName>
        <StyledTeamCardPosition>{position}</StyledTeamCardPosition>
      </StyledTeamCardTextWrapper>
    </StyledTeamCardWrapper>
  );
};

export default TeamCard;
