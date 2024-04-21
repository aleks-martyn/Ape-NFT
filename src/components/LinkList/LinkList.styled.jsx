import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1;

  @media screen and (min-width: 1280px) {
    gap: 15px;
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
