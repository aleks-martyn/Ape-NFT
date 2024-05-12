import styled from '@emotion/styled';
import { Link } from 'react-scroll';

export const StyledNav = styled.nav`
  margin-bottom: 186px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    overflow-x: hidden;
  }
`;

const getOpacity = isShowModal => (isShowModal ? 1 : 0);
const getVisibility = isShowModal => (isShowModal ? 'visible' : 'hidden');
const getTranslate = isShowModal => (isShowModal ? 0 : '100%');

const getTimingFunc = isShowModal => (isShowModal ? 'linear' : 'easy');

export const MenuLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    opacity: ${({ isShowModal }) => getOpacity(isShowModal)};
    visibility: ${({ isShowModal }) => getVisibility(isShowModal)};
    transform: translateX(${({ isShowModal }) => getTranslate(isShowModal)});
    transition-timing-function: ${({ isShowModal }) =>
      getTimingFunc(isShowModal)};
    transition-duration: 200ms;
    transition-property: opacity, visibility, transform;
  }
`;

export const MenuListItem = styled.li`
  @media screen and (min-width: 768px) {
    background-color: var(--btn-color);

    &:first-of-type {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }

  @media screen and (min-width: 1280px) {
    &:first-of-type {
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    }
  }
`;

export const MenuLink = styled(Link)`
  display: inline-flex;
  box-sizing: border-box;
  width: 100px;
  height: 53px;
  justify-content: center;
  align-items: center;
  color: var(--primary-text-color);
  cursor: pointer;
  text-decoration: none;
  transition: color var(--tra), text-decoration(--tra);

  &:hover span {
    color: var(--accent-color);
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
    color: var(--secondary-text-color);

    &:hover span {
      color: var(--primary-text-color);
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 1280px) {
      width: 80px;
      height: 80px;
`;

export const LinkName = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.21;
  text-transform: uppercase;
  transition: color var(--tra);

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.17;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.19;
  }
`;
