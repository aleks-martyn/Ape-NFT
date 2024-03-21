import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  padding-bottom: 24px;

  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.19;
  }
`;
