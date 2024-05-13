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
    <InnerWrap index={index}>
      {index !== 3 ? (
        <>
          <CardText>{text}</CardText>

          <CardTitle>{title}</CardTitle>
        </>
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
    </InnerWrap>
  </Wrap>
);

MapCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
