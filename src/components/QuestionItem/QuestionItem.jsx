import {
  QuestionWrap,
  ImageThumb,
  Image,
  TextWrap,
  QuestionTitle,
  QuestionText,
} from './QuestionItem.styled';

export const QuestionItem = ({ title, text, src, alt, index }) => {
  return (
    <QuestionWrap index={index}>
      <ImageThumb index={index}>
        <Image src={src} alt={alt} />
      </ImageThumb>

      <TextWrap>
        <QuestionTitle index={index}>{title}</QuestionTitle>

        <QuestionText index={index}>{text}</QuestionText>
      </TextWrap>
    </QuestionWrap>
  );
};
