import PropTypes from 'prop-types';
import {
  Wrap,
  CardText,
  CardTitle,
  StyledLink,
  Linklabel,
} from './MapCard.styled';

export const MapCard = ({ title, text, index }) => (
  <>
    {index !== 3 ? (
      <Wrap title={title}>
        <CardText>{text}</CardText>

        <CardTitle>{title}</CardTitle>
      </Wrap>
    ) : (
      <StyledLink
        href="https://en.wikipedia.org/wiki/Non-fungible_token"
        target="_blank"
        rel="noreferrer noopener"
        title={title}
      >
        <Linklabel>
          Learn
          <br /> more
          <br /> in mind map
        </Linklabel>
      </StyledLink>
    )}
  </>
);

MapCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
