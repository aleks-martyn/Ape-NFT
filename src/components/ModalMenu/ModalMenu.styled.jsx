import styled from '@emotion/styled';

export const ModalWin = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 62px 0 20px;
  background-color: var(--background-color);

  @media screen and (min-width: 768px) {
    background-color: transparent;
    padding-top: 66px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 40px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  width: 328px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 710px;
    margin-bottom: 0;
    justify-content: flex-end;
  }

  @media screen and (min-width: 1280px) {
    width: 1214px;
    margin-bottom: 0;
    justify-content: flex-end;
  }
`;

export const LogoLink = styled.a`
  display: flex;
  width: 48px;
  height: 32px;
  padding: 0;
  padding-top: 8px;
  border: none;
  align-items: center;
  justify-content: center;
  color: var(--primary-text-color);
  transition: color var(--tra);

  &:hover {
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    display: none;
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

export const CloseBtn = styled.button`
  width: 48px;
  height: 48px;
  padding-left: 2px;
  padding-right: 2px;
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

export const SocialLink = styled.a`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: none;
  background-color: var(--modal-btn-bg-color);
  color: var(--primary-text-color);
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: color var(--tra);

  &:hover {
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 66px;
    left: 77px;
    width: 614px;
    flex-direction: row;
    justify-content: flex-end;
    gap: 0;
  }

  @media screen and (min-width: 1280px) {
    top: 40px;
  }
`;

export const MenuListItem = styled.li`
  @media screen and (min-width: 768px) {
    display: flex;
    height: 48px;
    width: 48px;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
      background-color: var(--btn-color);

      &:first-of-type {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
    }

    @media screen and (min-width: 1280px) {
      width: 80px;
      height: 80px;

      &:first-of-type {
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
      }
    }
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: var(--primary-text-color);

  &:hover span {
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    color: var(--secondary-text-color);

    &:hover span {
      color: var(--primary-text-color);
    }
  }
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
  margin-bottom: 240px;

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
