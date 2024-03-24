import styled from '@emotion/styled';

export const Wrap = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-gap: 24px;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: 1fr 1fr;
  }
`;
