import styled from '@emotion/styled';
import { getBtnBgColor } from 'utils/getBtnBgColor';
import { getBtnLabelColor } from 'utils/getBtnLabelColor';
import { getBtnHoverColor } from 'utils/getBtnHoverColor';
import { TABLET_CHANGE_POINT, DESK_CHANGE_POINT } from 'constants';

const getOpacity = isShowModal => (isShowModal ? 1 : 0);
const getVisibility = isShowModal => (isShowModal ? 'visible' : 'hidden');
const getTranslate = isShowModal => (isShowModal ? 0 : '100%');

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--background-color);
  z-index: 2;
  opacity: ${({ isShowModal }) => getOpacity(isShowModal)};
  visibility: ${({ isShowModal }) => getVisibility(isShowModal)};
  transition-duration: 100ms;
  transition-timing-function: cubic-bezier(0.01, 1.24, 1, 0.7);
  transition-property: opacity, visibility;

  @media screen and (min-width: 768px) {
    background-color: transparent;
    transition-timing-function: linear;
  }
`;

export const ModalWin = styled.div`
  padding-top: 62px;
  padding-bottom: 20px;
  opacity: ${({ isShowModal }) => getOpacity(isShowModal)};
  visibility: ${({ isShowModal }) => getVisibility(isShowModal)};
  transform: translateX(${({ isShowModal }) => getTranslate(isShowModal)});
  transition-timing-function: ease;
  transition-duration: 250ms;
  transition-property: opacity, visibility, transform;

  @media screen and (min-width: 768px) {
    padding-top: 66px;
    transition-timing-function: linear;
    transition-duration: 100ms;
    transition-property: opacity, visibility;
    transform: none;
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
    display: flex;
    flex-direction: row-reverse;
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
`;

export const CloseBtn = styled.button`
  display: inline-flex;
  width: 48px;
  height: 48px;
  padding: 0;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  background-color: var(--modal-btn-bg-color);

  &:hover span {
    color: var(--accent-color);
    text-decoration: underline;
    transition: color var(--tra), text-decoration var(--tra);

    @media screen and (min-width: 768px) {
      color: ${({ scrolly }) => getBtnHoverColor(scrolly, TABLET_CHANGE_POINT)};
    }

    @media screen and (min-width: 1280px) {
      color: ${({ scrolly }) => getBtnHoverColor(scrolly, DESK_CHANGE_POINT)};
    }
  }

  @media screen and (min-width: 768px) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: ${({ scrolly }) =>
      getBtnBgColor(scrolly, TABLET_CHANGE_POINT)};
  }

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    background-color: ${({ scrolly }) =>
      getBtnBgColor(scrolly, DESK_CHANGE_POINT)};
  }
`;

export const BtnLabel = styled.span`
  font-family: 'Messina Sans Mono';
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    color: ${({ scrolly }) => getBtnLabelColor(scrolly, TABLET_CHANGE_POINT)};
  }

  @media screen and (min-width: 1280px) {
    color: ${({ scrolly }) => getBtnLabelColor(scrolly, DESK_CHANGE_POINT)};
    font-size: 16px;
    line-height: 1.19;
  }
`;

export const LowerText = styled.p`
  width: 216px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
