import PropTypes from 'prop-types';
import { ImageWrap, StyledImage } from './CollectionCard.styled';

export const CollectionCard = ({ src, alt, srcSet }) => (
  <ImageWrap>
    <StyledImage loading="lazy" src={src} alt={alt} srcSet={srcSet} />
  </ImageWrap>
);

CollectionCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
};
