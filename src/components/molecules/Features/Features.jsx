import Feature from '../../atoms/Feature/Feature';
import { StyledFeatures } from './Features.styled';
import {
  ServiceIcon,
  MechanicIcon,
  DollarIcon,
} from '../../../assets/icons/icons';

const Features = ({ bgColor }) => {
  return (
    <StyledFeatures>
      <Feature
        icon={<ServiceIcon />}
        bgColor={bgColor}
        headline={'Convenient service'}
        text={
          'Through True Rich Attended does no end it his mother since real had half every him.'
        }
      />
      <Feature
        icon={<MechanicIcon />}
        bgColor={bgColor}
        headline={'Expert mechanics'}
        text={
          'Through True Rich Attended does no end it his mother since real had half every him.'
        }
      />
      <Feature
        icon={<DollarIcon />}
        bgColor={bgColor}
        headline={'Transparent pricing'}
        text={
          'Through True Rich Attended does no end it his mother since real had half every him.'
        }
      />
    </StyledFeatures>
  );
};

export default Features;
