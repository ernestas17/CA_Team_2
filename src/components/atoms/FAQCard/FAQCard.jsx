import React, { useState } from 'react';
import {
  StyledFAQSectionCard,
  StyledFAQSectionText,
  StyledButton,
  StyledFAQHeading,
} from '../FAQCard/FAQCard.styled';
import { MinusIcon, PlusIcon } from '../../../assets/icons/icons';

const FAQCard = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledFAQSectionCard onClick={() => setIsOpen(!isOpen)}>
      <StyledFAQSectionText>
        <StyledFAQHeading>
          <h5>{title}</h5>
        </StyledFAQHeading>
        {isOpen && <p>{text}</p>}
      </StyledFAQSectionText>
      <StyledButton>{isOpen ? <MinusIcon /> : <PlusIcon />}</StyledButton>
    </StyledFAQSectionCard>
  );
};

export default FAQCard;
