import styled from '@emotion/styled';

export const ImageWrap = styled.li`
  width: 216px;
  height: 256px;
  border-radius: 12px;
  background-color: var(--accent-color);
`;

export const StyledImage = styled.img`
  width: 216px;
  height: 256px;
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    width: 284px;
    height: 336px;
    border-radius: 24px;
  }
`;
