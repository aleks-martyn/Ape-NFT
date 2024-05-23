import styled from '@emotion/styled';
import { getDisplay } from 'utils/getDisplay';
import { getColor } from 'utils/getColor';
import { getBgColor } from 'utils/getBgColor';
import { getHoverColor } from 'utils/getHoverColor';
import {
  MOBILE_CHANGE_POINT,
  TABLET_CHANGE_POINT,
  DESK_CHANGE_POINT,
  TABLET_LINK_HEIGHT,
  DESK_LINK_HEIGHT,
  TABLET_LIST_GAP,
  DESK_LIST_GAP,
} from 'constants';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    display: ${({ component }) => getDisplay(component)};
  }

  @media screen and (min-width: 1280px) {
    gap: 15px;
  }
`;

const mobileObjParam = {
  changeColorPosition: MOBILE_CHANGE_POINT,
  height: TABLET_LINK_HEIGHT,
  gap: TABLET_LIST_GAP,
};

const tabletObjParam = {
  changeColorPosition: TABLET_CHANGE_POINT,
  height: TABLET_LINK_HEIGHT,
  gap: TABLET_LIST_GAP,
};

const deskObjParam = {
  changeColorPosition: DESK_CHANGE_POINT,
  height: DESK_LINK_HEIGHT,
  gap: DESK_LIST_GAP,
};

const getChangeColorPoint = (index, { changeColorPosition, height, gap }) =>
  changeColorPosition - (index + 1) * (height + gap);

export const SocialLink = styled.a`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: none;
  background-color: ${({ component, scrolly, index }) =>
    getBgColor(component, scrolly, getChangeColorPoint(index, mobileObjParam))};
  color: ${({ component, scrolly, index }) =>
    getColor(component, scrolly, getChangeColorPoint(index, mobileObjParam))};
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover {
    color: ${({ component, scrolly, index }) =>
      getHoverColor(
        component,
        scrolly,
        getChangeColorPoint(index, mobileObjParam)
      )};
    transition: color var(--tra);

    @media screen and (min-width: 768px) {
      color: ${({ component, scrolly, index }) =>
        getHoverColor(
          component,
          scrolly,
          getChangeColorPoint(index, tabletObjParam)
        )};
    }

    @media screen and (min-width: 1280px) {
      color: ${({ component, scrolly, index }) =>
        getHoverColor(
          component,
          scrolly,
          getChangeColorPoint(index, deskObjParam)
        )};
    }
  }

  @media screen and (min-width: 768px) {
    display: ${({ component }) => getDisplay(component)};
    background-color: ${({ component, scrolly, index }) =>
      getBgColor(
        component,
        scrolly,
        getChangeColorPoint(index, tabletObjParam)
      )};
    color: ${({ component, scrolly, index }) =>
      getColor(component, scrolly, getChangeColorPoint(index, tabletObjParam))};
  }

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    background-color: ${({ component, scrolly, index }) =>
      getBgColor(component, scrolly, getChangeColorPoint(index, deskObjParam))};
    color: ${({ component, scrolly, index }) =>
      getColor(component, scrolly, getChangeColorPoint(index, deskObjParam))};
  }
`;
