import PropTypes from 'prop-types';
import { Container } from 'components/Container';
import { StyledSection, SectionTitle } from './Section.styled';

export const Section = ({ id, title, children }) => (
  <StyledSection id={id}>
    <Container>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Container>
  </StyledSection>
);

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
