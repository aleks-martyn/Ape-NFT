import PropTypes from 'prop-types';
import { ImageWrap, StyledImage } from './CollectionCard.styled';

export const CollectionCard = ({ src, alt }) => (
  <ImageWrap>
    <StyledImage loading="lazy" src={src} alt={alt} />
  </ImageWrap>
);

CollectionCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
