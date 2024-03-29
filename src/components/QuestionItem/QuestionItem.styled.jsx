import styled from '@emotion/styled';

const getBeforeColor = (index, currentIndex) =>
  index === currentIndex ? 'var(--primary-text-color)' : 'var(--accent-color)';

const getWrapBgColor = (index, currentIndex) =>
  index === currentIndex ? 'var(--secondary-text-color)' : 'transparent';

export const QuestionWrap = styled.li`
  position: relative;
  display: flex;
  width: 216px;
  padding: 8px;
  border-radius: 12px;
  background-color: ${({ index, currentIndex }) =>
    getWrapBgColor(index, currentIndex)};

  &:hover h3 {
    color: var(--accent-color);
  }

  &:hover:before {
    color: var(--primary-text-color);
  }

  &::before {
    display: inline-block;
    margin-right: 8px;
    content: '${({ index }) => `[ ${index + 1} ]`}';
    color: ${({ index, currentIndex }) => getBeforeColor(index, currentIndex)};
    font-family: 'Biro Script Plus';
    font-size: 12px;
    font-weight: 400;
    line-height: 1.67;
    text-wrap: nowrap;
    transition: color var(--tra);

    @media screen and (min-width: 768px) {
      margin-right: 24px;
      padding-top: 2px;
      font-size: 16px;
      line-height: 1.69;
    }

    @media screen and (min-width: 1280px) {
      margin-right: 27px;
      padding-top: 4px;
      font-size: 24px;
      line-height: 1.67;
    }
  }

  @media screen and (min-width: 768px) {
    width: 592px;
    padding: 18px 18px 23px 183px;
    border-radius: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 1032px;
    padding: 24px 24px 24px 297px;
    border-radius: 24px;
  }
`;

const getImgThumbDisplay = (index, currentIndex) =>
  index === currentIndex ? 'block' : 'none';

export const ImageThumb = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    display: ${({ index, currentIndex }) =>
      getImgThumbDisplay(index, currentIndex)};
    transform-origin: 40px 14px;
    rotate: -16deg;
    overflow: hidden;
    border-radius: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 248px;
    height: 282px;
    rotate: -8deg;
    border-radius: 24px;
  }
`;

export const Image = styled.img`
  @media screen and (min-width: 768px) {
    width: 148px;
  }

  @media screen and (min-width: 1280px) {
    width: 248px;
    position: absolute;
    top: -12px;
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

const getTitleColor = (index, currentIndex) =>
  index === currentIndex ? 'var(--accent-color)' : 'var(--primary-text-color)';

export const QuestionTitle = styled.h3`
  color: ${({ index, currentIndex }) => getTitleColor(index, currentIndex)};
  font-family: 'Right Grotesk';
  font-size: 20px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  text-align: start;
  transition: color var(--tra);

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

const getTextDisplay = (index, currentIndex) =>
  index === currentIndex ? 'block' : 'none';

export const QuestionText = styled.p`
  display: ${({ index, currentIndex }) => getTextDisplay(index, currentIndex)};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-transform: uppercase;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.19;
  }
`;
