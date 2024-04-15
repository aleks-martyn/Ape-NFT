import PropTypes from 'prop-types';
import { Image } from './ImageSet.styled';

export const ImageSet = ({ id, pictures, alt, loading }) => {
  const { img } = pictures[2];

  return (
    <picture>
      {pictures.map(({ img, imgX2, imgX3, screenDimension }, index) => (
        <source
          key={index}
          srcSet={`${img} 1x, ${imgX2} 2x, ${imgX3} 3x`}
          media={screenDimension}
        />
      ))}
      <Image src={img} alt={alt} id={id} loading={loading} />
    </picture>
  );
};

ImageSet.propTypes = {
  id: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  alt: PropTypes.string.isRequired,
  loading: PropTypes.string.isRequired,
};
