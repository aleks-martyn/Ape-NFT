import styled from '@emotion/styled';

export const QuestionWrap = styled.li`
  display: flex;
  width: 216px;
  border-radius: 12px;
  background-color: var(--secondary-text-color);

  @media screen and (min-width: 768px) {
    width: 592px;
    border-radius: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 1034px;
    border-radius: 24px;
  }
`;

export const ImageThumb = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    rotate: -16deg;
  }

  @media screen and (min-width: 1280px) {
    width: 248px;
    height: 282px;
    rotate: -8deg;
  }
`;

export const Image = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    width: 148px;
  }

  @media screen and (min-width: 1280px) {
    width: 248px;
    object-fit: cover;
    object-position: bottom;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 12px;
  }

  @media screen and (min-width: 1280px) {
    gap: 36px;
  }
`;

export const QuestionTitle = styled.h3`
  font-family: 'Right Grotesk';
  font-size: 20px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  text-align: start;

  &::before {
    content: '[]';
    font-family: 'Biro Script Plus';
    font-size: 12px;
    font-weight: 400;
    line-height: 1.67;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.69;
    }

    @media screen and (min-width: 1280px) {
      font-size: 24px;
      line-height: 1.67;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const QuestionText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.19;
  }
`;
