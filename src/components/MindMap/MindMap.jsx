import PropTypes from 'prop-types';
import { MapCard } from 'components/MapCard';
import { Wrap } from './MindMap.styled';

export const MindMap = ({ items, slide = 0 }) => (
  <Wrap slide={slide}>
    {items.map(({ title, text }, index) => (
      <MapCard key={index} index={index} title={title} text={text} />
    ))}
  </Wrap>
);

MindMap.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  slide: PropTypes.number,
};
