import { ImageWrap, StyledImage } from './CollectionCard.styled';

export const CollectionCard = ({ src, alt }) => {
  return (
    <ImageWrap>
      <StyledImage src={src} alt={alt} />
    </ImageWrap>
  );
};
