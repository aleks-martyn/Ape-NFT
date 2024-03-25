import { CollectionCard } from 'components/CollectionCard';
import { Wrap } from './CollectionList.styled';

export const CollectionList = ({ items, slide }) => {
  return (
    <Wrap slide={slide}>
      {items.map(({ src, alt }, index) => (
        <CollectionCard key={index} src={src} alt={alt} />
      ))}
    </Wrap>
  );
};
