import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 62px;

  @media screen and (min-width: 768px) {
    padding-top: 66px;
    z-index: 1;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 40px;
  }
`;

export const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 28px;
    padding-right: 28px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    position: fixed;
    top: 66px;
    right: 50%;
    translate: 356px;
  }

  @media screen and (min-width: 1280px) {
    gap: 15px;
    top: 40px;
    translate: 608px;
  }
`;

const getOpacity = isShowModal => (isShowModal ? 0 : 1);
const getVisibility = isShowModal => (isShowModal ? 'hidden' : 'visible');

export const MenuBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: none;
  background-color: var(--btn-color);

  &:hover span {
    color: var(--primary-text-color);
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    opacity: ${({ isShowModal }) => getOpacity(isShowModal)};
    visibility: ${({ isShowModal }) => getVisibility(isShowModal)};
    transition-duration: 100ms;
    transition-timing-function: linear;
    transition-property: opacity, visibility;
  }

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
    border-radius: 12px;
  }
`;

export const BtnLabel = styled.span`
  font-family: 'Messina Sans Mono';
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  transition: color var(--tra), text-decoration var(--tra);

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.19;
  }
`;
