import styled from '@emotion/styled';

export const Wrap = styled.ul`
  display: flex;
  transition: transform var(--tra);

  @media screen and (min-width: 768px) {
    display: grid;
    grid-gap: 24px;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: 1fr 1fr;
  }
`;
