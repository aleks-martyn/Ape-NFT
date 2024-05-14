import PropTypes from 'prop-types';
import {
  Wrap,
  InnerWrap,
  CardText,
  CardTitle,
  StyledLink,
  Linklabel,
} from './MapCard.styled';

export const MapCard = ({ title, text, index }) => (
  <Wrap>
    {index !== 3 ? (
      <InnerWrap index={index}>
        <CardText>{text}</CardText>

        <CardTitle>{title}</CardTitle>
      </InnerWrap>
    ) : (
      <StyledLink
        href="https://en.wikipedia.org/wiki/Non-fungible_token"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Linklabel>
          Learn
          <br /> more
          <br /> in mind map
        </Linklabel>
      </StyledLink>
    )}
  </Wrap>
);

MapCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
