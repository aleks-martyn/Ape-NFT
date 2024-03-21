import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 70px;
  z-index: 999;
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
    padding-left: 112px;
    padding-right: 112px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LogoLink = styled.a`
  display: flex;
  width: 48px;
  height: 32px;
  padding: 0;
  border: none;
  align-items: center;
  justify-content: center;
  color: var(--secondary-text-color);
  transition: color var(--tra);

  &:hover {
    color: var(--primary-text-color);
  }
`;

export const MenuTitle = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  transition: color var(--tra), text-decoration var(--tra);
`;

export const SocialLink = styled.a`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: none;
  background-color: var(--btn-color);
  color: var(--secondary-text-color);
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: color var(--tra);

  &:hover {
    color: var(--primary-text-color);
  }
`;

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
`;
