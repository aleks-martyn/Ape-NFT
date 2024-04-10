import { ImageWrap, StyledImage } from './CollectionCard.styled';

export const CollectionCard = ({ src, alt }) => {
  return (
    <ImageWrap>
      <StyledImage loading="lazy" src={src} alt={alt} />
    </ImageWrap>
  );
};
