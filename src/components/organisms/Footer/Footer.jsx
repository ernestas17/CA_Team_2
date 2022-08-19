import { useLocation } from 'react-router-dom';

import FooterBottom from '../../molecules/FooterBottom';
import FooterTop from '../../molecules/FooterTop';

import { StyledFooterWrapper } from './Footer.style';

const Footer = () => {
  const location = useLocation();

  return (
    <StyledFooterWrapper>
      {location.pathname !== '/contact' && <FooterTop />}
      <FooterBottom />
    </StyledFooterWrapper>
  );
};

export default Footer;
