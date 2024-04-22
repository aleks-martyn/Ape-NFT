import styled from '@emotion/styled';

const getDisplay = componentName =>
  componentName === 'header' ? 'flex' : 'none';

const getBgColor = componentName =>
  componentName === 'header' ? 'var(--btn-color)' : 'var(--modal-btn-bg-color)';

const getColor = componentName =>
  componentName === 'header'
    ? 'var(--secondary-text-color)'
    : 'var(--primary-text-color)';

const getHoverColor = componentName =>
  componentName === 'header'
    ? 'var(--primary-text-color)'
    : 'var(--accent-color)';

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

export const SocialLink = styled.a`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: none;
  background-color: ${({ component }) => getBgColor(component)};
  color: ${({ component }) => getColor(component)};
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: color var(--tra);

  &:hover {
    color: ${({ component }) => getHoverColor(component)};
  }

  @media screen and (min-width: 768px) {
    display: ${({ component }) => getDisplay(component)};
  }

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
    border-radius: 12px;
  }
`;
