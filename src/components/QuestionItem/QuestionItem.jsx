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
        <Image src={src} alt={alt} />
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
