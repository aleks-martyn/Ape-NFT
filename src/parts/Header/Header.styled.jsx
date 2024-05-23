import styled from '@emotion/styled';
import { getBtnBgColor } from 'utils/getBtnBgColor';
import { getBtnLabelColor } from 'utils/getBtnLabelColor';
import { getBtnHoverColor } from 'utils/getBtnHoverColor';
import {
  MOBILE_CHANGE_POINT,
  TABLET_CHANGE_POINT,
  DESK_CHANGE_POINT,
} from 'constants';

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
  position: fixed;
  top: 62px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 481px) and (max-width: 767px) {
    right: 50%;
    translate: 224px;
  }

  @media screen and (min-width: 768px) {
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
  background-color: ${({ scrolly }) =>
    getBtnBgColor(scrolly, MOBILE_CHANGE_POINT)};

  &:hover span {
    color: ${({ scrolly }) => getBtnHoverColor(scrolly, MOBILE_CHANGE_POINT)};
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
    opacity: ${({ isShowModal }) => getOpacity(isShowModal)};
    visibility: ${({ isShowModal }) => getVisibility(isShowModal)};
    background-color: ${({ scrolly }) =>
      getBtnBgColor(scrolly, TABLET_CHANGE_POINT)};
    transition-duration: 100ms;
    transition-timing-function: linear;
    transition-property: opacity, visibility;
  }

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    background-color: ${({ scrolly }) =>
      getBtnBgColor(scrolly, DESK_CHANGE_POINT)};
  }
`;

export const BtnLabel = styled.span`
  font-family: 'Messina Sans Mono';
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: ${({ scrolly }) => getBtnLabelColor(scrolly, MOBILE_CHANGE_POINT)};

  @media screen and (min-width: 768px) {
    color: ${({ scrolly }) => getBtnLabelColor(scrolly, TABLET_CHANGE_POINT)};
  }

  @media screen and (min-width: 1280px) {
    color: ${({ scrolly }) => getBtnLabelColor(scrolly, DESK_CHANGE_POINT)};
    font-size: 16px;
    line-height: 1.19;
  }
`;
