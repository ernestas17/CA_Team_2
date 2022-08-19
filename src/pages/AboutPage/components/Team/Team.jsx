import React from 'react';
import { StyledTeamWrapper, StyledTeamContainer } from './Team.style';

import TeamCard from '../../../../components/atoms/TeamCard';
import Melo from '../../../../assets/images/Melo.png';
import Honson from '../../../../assets/images/Honson.png';
import Lane from '../../../../assets/images/Lane.png';
import Davies from '../../../../assets/images/Davies.png';
import Danford from '../../../../assets/images/Danford.png';
import Wilson from '../../../../assets/images/Wilson.png';

const Team = () => {
  return (
    <StyledTeamWrapper>
      <h2>Meet our Team</h2>
      <StyledTeamContainer>
        <TeamCard
          name="Javena Melo"
          position="Founder, Director"
          bgImage={Melo}
        />
        <TeamCard
          name="Paul Honson"
          position="Head Technician"
          bgImage={Honson}
        />
        <TeamCard name="Devon Lane" position="Technician" bgImage={Lane} />
        <TeamCard
          name="Jalen Davies"
          position="Marketing Manager"
          bgImage={Davies}
        />
        <TeamCard
          name="Kylee Danford"
          position="Sales Manager"
          bgImage={Danford}
        />

        <TeamCard
          name="Luisa Wilson"
          position="Support Assistant"
          bgImage={Wilson}
        />
      </StyledTeamContainer>
    </StyledTeamWrapper>
  );
};

export default Team;
