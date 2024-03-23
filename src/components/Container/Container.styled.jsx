import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 72px;
  padding-right: 72px;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 88px;
    padding-right: 88px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 124px;
    padding-right: 124px;
  }
`;
