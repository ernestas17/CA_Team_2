import {
  StyledContactWrapper,
  StyledContactLeft,
  StyledContactRight,
  StyledContactContainer,
  StyledContactPageImage,
} from './ContactPage.styled';
import Form from '../../components/molecules/Form';
import Map from '../../components/molecules/Map';
import contactPageImage from '../../assets/images/ContactPageImage.jpg';

const ContactPage = () => {
  return (
    <>
      <StyledContactWrapper>
        <StyledContactContainer>
          <StyledContactLeft>
            <Form
              heading="Get in touch with our experts"
              btnColor="primary"
              text="Send message"
              inputs={[
                {
                  id: 1,
                  type: 'text',
                  placeholder: 'Your full Name',
                  color: 'lightgrey',
                },
                {
                  id: 2,
                  type: 'email',
                  placeholder: 'Your Email',
                  color: 'lightgrey',
                },
                {
                  id: 3,
                  type: 'text',
                  placeholder: 'Select service type',
                  color: 'lightgrey',
                },
                {
                  id: 4,
                  type: 'text',
                  placeholder: 'Message',
                  color: 'lightgrey',
                },
              ]}
            />
          </StyledContactLeft>
          <StyledContactRight>
            <div>
              <span>Address</span>
              <p>NH 234 Public Square San Francisco 65368</p>
            </div>
            <div>
              <span>Contact Details</span>
              <p>1800 265 24 52</p>
              <p>Finsweet@gmail.com</p>
            </div>
            <div>
              <span>Opening Hours</span>
              <p>Monday to Friday 9:00 AM to 10:00 AM</p>
            </div>
          </StyledContactRight>
        </StyledContactContainer>
        <Map />
      </StyledContactWrapper>
      <StyledContactPageImage src={contactPageImage} alt="contact-image" />
    </>
  );
};

export default ContactPage;
