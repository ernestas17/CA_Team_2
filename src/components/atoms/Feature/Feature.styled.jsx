import styled from 'styled-components';

export const StyledFeature = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(
    --${(props) => (props.bgColor ? props.bgColor : 'transparent')}
  );

  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const StyledText = styled.div`
  width: 80%;
  h5 {
    font-size: var(--title2);
    padding-bottom: 10px;
  }

  p {
    color: var(--darkgrey);
  }
`;
