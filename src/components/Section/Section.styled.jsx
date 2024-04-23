import styled from '@emotion/styled';

export const StyledSection = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 24px;
  font-family: 'Right Grotesk';
  font-weight: 900;
  font-size: 44px;
  line-height: 0.9;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 80px;
    line-height: 1;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 80px;
    font-size: 160px;
  }
`;
