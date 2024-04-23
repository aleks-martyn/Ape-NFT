import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { getDisplay } from 'utils/getDisplay';
import { getColor } from 'utils/getColor';
import { getHoverColor } from 'utils/getHoverColor';

export const StyledLink = styled(Link)`
  display: flex;
  width: 48px;
  height: 32px;
  padding: 0;
  padding-top: 8px;
  border: none;
  align-items: center;
  justify-content: center;
  color: ${({ component }) => getColor(component)};
  transition: color var(--tra);

  &:hover {
    color: ${({ component }) => getHoverColor(component)};
  }

  @media screen and (min-width: 768px) {
    display: ${({ component }) => getDisplay(component)};
  }

  @media screen and (min-width: 1280px) {
    width: 72px;
    height: 50px;
    padding-top: 15px;
  }
`;
