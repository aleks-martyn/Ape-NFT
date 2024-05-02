import { Link } from 'react-scroll';
import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--background-color);
  z-index: 2;

  @media screen and (min-width: 768px) {
    background-color: transparent;
  }
`;

export const ModalWin = styled.div`
  padding-top: 62px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 66px;
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
  }

  @media screen and (min-width: 768px) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: var(--btn-color);

    &:hover span {
      color: var(--primary-text-color);
    }
  }

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

export const BtnLabel = styled.span`
  font-family: 'Messina Sans Mono';
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: var(--primary-text-color);
  transition: color var(--tra), text-decoration var(--tra);

  @media screen and (min-width: 768px) {
    color: var(--secondary-text-color);
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.19;
  }
`;

export const MenuLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
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

export const StyledNav = styled.nav`
  margin-bottom: 186px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
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
