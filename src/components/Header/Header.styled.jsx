import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 62px;

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

  @media screen and (min-width: 1280px) {
    gap: 15px;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1;

  @media screen and (min-width: 1280px) {
    gap: 15px;
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
  color: var(--secondary-text-color);
  transition: color var(--tra);

  &:hover {
    color: var(--primary-text-color);
  }

  @media screen and (min-width: 1280px) {
    width: 72px;
    height: 50px;
    padding-top: 15px;
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

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
    border-radius: 12px;
  }
`;

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
    visibility: ${({ isShowModal }) => getVisibility(isShowModal)};
  }

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
    border-radius: 12px;
  }
`;
