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
  srcSet,
  index,
  currentIndex,
  onClick,
}) => {
  const tabIndex = index === currentIndex ? '-1' : '0';

  const handleKeyDown = event => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') onClick();
  };

  const onFocusHandler = () =>
    window.addEventListener('keydown', handleKeyDown);

  const onBlurHandler = () =>
    window.removeEventListener('keydown', handleKeyDown);

  return (
    <QuestionWrap
      index={index}
      currentIndex={currentIndex}
      onClick={() => onClick()}
      tabIndex={tabIndex}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
    >
      <ImageThumb index={index} currentIndex={currentIndex}>
        <Image loading="lazy" src={src} alt={alt} srcSet={srcSet} />
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
  srcSet: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
