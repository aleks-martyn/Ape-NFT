import styled from '@emotion/styled';

export const ImageWrap = styled.li`
  border-radius: 24px;
  background-color: var(--background-color);
`;

export const StyledImage = styled.img`
  width: 216px;
  min-width: 216px;
  border-radius: 24px;

  @media screen and (min-width: 768px) {
    width: 284px;
    min-width: 284px;
  }

  @media screen and (min-width: 1280px) {
    width: 240px;
    min-width: 240px;
  }
`;
