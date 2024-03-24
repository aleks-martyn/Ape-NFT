import { MapCard } from 'components/MapCard';
import { Wrap } from './MindMap.styled';

export const MindMap = ({items, slide}) => {
  return (
    <Wrap style={{ transform: `translateX(-${slide * 100}%)` }}>
      {items.map(({ title, text }, index) => (
        <MapCard key={index} index={index} title={title} text={text} />
      ))}
    </Wrap>
  );
};
