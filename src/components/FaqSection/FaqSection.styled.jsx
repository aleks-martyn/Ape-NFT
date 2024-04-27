import styled from '@emotion/styled';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;

  @media screen and (min-width: 768px) {
    align-items: end;
  }
`;
