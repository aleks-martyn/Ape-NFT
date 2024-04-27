import styled from '@emotion/styled';

const getBeforeColor = (index, currentIndex) =>
  index === currentIndex ? 'var(--primary-text-color)' : 'var(--accent-color)';

const getWrapBgColor = (index, currentIndex) =>
  index === currentIndex ? 'var(--secondary-text-color)' : 'transparent';

const getCursor = (index, currentIndex) =>
  index === currentIndex ? 'default' : 'pointer';

const getTabletPadding = (index, currentIndex) =>
  index === currentIndex ? '187px' : '18px';

const getItemTabletWidth = (index, currentIndex) =>
  index === currentIndex ? '592px' : '423px';

const getDeskPadding = (index, currentIndex) =>
  index === currentIndex ? '297px' : '24px';

const getItemDeskWidth = (index, currentIndex) =>
  index === currentIndex ? '1032px' : '759px';

const getPadding = (index, currentIndex, screenDimension) => {
  let padding;

  switch (screenDimension) {
    case '768pxTop':
      padding = index === currentIndex ? '18px' : '0px';
      break;

    case '768pxBottom':
      padding = index === currentIndex ? '23px' : '0px';
      break;

    case '1280px':
      padding = index === currentIndex ? '24px' : '0px';
      break;

    default:
      padding = index === currentIndex ? '8px' : '0px';
  }
  return padding;
};

export const QuestionWrap = styled.li`
  position: relative;
  display: flex;
  width: 216px;
  padding: 8px;
  border-radius: 12px;
  cursor: ${({ index, currentIndex }) => getCursor(index, currentIndex)};
  background-color: ${({ index, currentIndex }) =>
    getWrapBgColor(index, currentIndex)};
  transition: background-color var(--tra);

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
      margin-right: 21px;
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
    width: ${({ index, currentIndex }) =>
      getItemTabletWidth(index, currentIndex)};
    padding-top: 18px;
    padding-right: 18px;
    padding-bottom: 23px;
    padding-left: ${({ index, currentIndex }) =>
      getTabletPadding(index, currentIndex)};
    border-radius: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: ${({ index, currentIndex }) =>
      getItemDeskWidth(index, currentIndex)};
    padding: 24px;
    padding-left: ${({ index, currentIndex }) =>
      getDeskPadding(index, currentIndex)};
    border-radius: 24px;
  }

  &:first-of-type {
    padding-top: ${({ index, currentIndex }) =>
      getPadding(index, currentIndex, '360px')};

    @media screen and (min-width: 768px) {
      padding-top: ${({ index, currentIndex }) =>
        getPadding(index, currentIndex, '768pxTop')};
    }

    @media screen and (min-width: 1280px) {
      padding-top: ${({ index, currentIndex }) =>
        getPadding(index, currentIndex, '1280px')};
    }
  }

  &:last-of-type {
    padding-bottom: ${({ index, currentIndex }) =>
      getPadding(index, currentIndex, '360px')};

    @media screen and (min-width: 768px) {
      padding-bottom: ${({ index, currentIndex }) =>
        getPadding(index, currentIndex, '768pxBottom')};
    }

    @media screen and (min-width: 1280px) {
      padding-bottom: ${({ index, currentIndex }) =>
        getPadding(index, currentIndex, '1280px')};
    }
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
    transition: display var(--tra);
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
  transition: display var(--tra);

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.19;
  }
`;
