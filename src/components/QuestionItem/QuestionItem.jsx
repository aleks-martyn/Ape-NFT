import {
  QuestionWrap,
  ImageThumb,
  Image,
  TextWrap,
  QuestionTitle,
  QuestionText,
} from './QuestionItem.styled';

export const QuestionItem = ({ title, text, index }) => {
  return (
    <QuestionWrap>
      <ImageThumb>
        <Image src="" alt="" />
      </ImageThumb>

      <TextWrap>
        <QuestionTitle index={index}>{title}</QuestionTitle>

        <QuestionText>{text}</QuestionText>
      </TextWrap>
    </QuestionWrap>
  );
};
