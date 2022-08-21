import {
  StyledBrandsSection,
  StyledBrandsSectionLogos,
} from './BrandsSection.styled';
import {
  Logo1Icon,
  Logo2Icon,
  Logo3Icon,
  Logo4Icon,
  Logo5Icon,
} from '../../../../assets/icons/icons';

const BrandsSection = () => {
  return (
    <StyledBrandsSection>
      <h3>Brands we serve</h3>
      <StyledBrandsSectionLogos>
        <Logo1Icon />
        <Logo2Icon />
        <Logo3Icon />
        <Logo4Icon />
        <Logo5Icon />
        <Logo1Icon />
        <Logo2Icon />
        <Logo3Icon />
        <Logo4Icon />
        <Logo5Icon />
      </StyledBrandsSectionLogos>
    </StyledBrandsSection>
  );
};

export default BrandsSection;
