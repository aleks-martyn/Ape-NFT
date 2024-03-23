import { MapCard } from 'components/MapCard';
import { cards } from 'cards';
import { Wrap } from './MindMap.styled';

export const MindMap = () => {
  return (
    <Wrap>
      {cards.map(({ title, text }, index) => (
        <MapCard key={index} index={index} title={title} text={text} />
      ))}
    </Wrap>
  );
};
