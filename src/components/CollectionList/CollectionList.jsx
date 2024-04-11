import PropTypes from 'prop-types';
import { CollectionCard } from 'components/CollectionCard';
import { Wrap } from './CollectionList.styled';

export const CollectionList = ({ items, slide }) => (
  <Wrap slide={slide}>
    {items.map(({ src, alt }, index) => (
      <CollectionCard key={index} src={src} alt={alt} />
    ))}
  </Wrap>
);

CollectionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  slide: PropTypes.number.isRequired,
};
