import PropTypes from 'prop-types';
import {
  QuestionWrap,
  ImageThumb,
  Image,
  TextWrap,
  QuestionTitle,
  QuestionText,
} from './QuestionItem.styled';

export const QuestionItem = ({
  title,
  text,
  src,
  alt,
  index,
  currentIndex,
  onClick,
}) => {
  return (
    <QuestionWrap
      index={index}
      currentIndex={currentIndex}
      onClick={() => onClick()}
    >
      <ImageThumb index={index} currentIndex={currentIndex}>
        <Image loading="lazy" src={src} alt={alt} />
      </ImageThumb>

      <TextWrap>
        <QuestionTitle index={index} currentIndex={currentIndex}>
          {title}
        </QuestionTitle>

        <QuestionText index={index} currentIndex={currentIndex}>
          {text}
        </QuestionText>
      </TextWrap>
    </QuestionWrap>
  );
};

QuestionItem.propTypes = {
  index: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
