import styled from '@emotion/styled';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

export const StyledSection = styled.section`
  padding-top: 60px;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 120px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    position: relative;
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 269px 313px;
  }

  @media screen and (min-width: 1280px) {
    display: grid;
    grid-column-gap: 0;
    grid-template-columns: 538px 492px;
  }
`;

export const SectionTitle = styled.h2`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  width: 216px;
  font-family: 'Right Grotesk';
  font-weight: 900;
  font-size: 40px;
  line-height: 1;
  text-transform: uppercase;
  text-align: start;

  @media screen and (min-width: 768px) {
    font-size: 60px;
    margin-bottom: 68px;
    margin-left: 0;
    margin-right: 0;
    width: 269px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 120px;
    width: 538px;
    margin-bottom: 56px;
  }
`;

export const Span = styled.span`
  color: var(--accent-color);
`;

export const FirstTextWrap = styled.div`
  width: 216px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 275px;
    margin-top: 10px;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 409px;
    margin-top: 22px;
  }
`;

export const FirstText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;
  text-align: end;
  text-indent: 50%;

  @media screen and (min-width: 768px) {
    text-indent: 0;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 1.21;
  }
`;

export const LastString = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;
  text-align: end;
  text-indent: 0;

  @media screen and (min-width: 768px) {
    text-indent: 30%;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 1.21;
  }
`;

export const SecondTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  width: 216px;

  @media screen and (min-width: 768px) {
    width: 269px;
    gap: 24px;
    margin-bottom: 36px;
    margin-left: 0;
    margin-right: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 417px;
    gap: 36px;
    margin-bottom: 40px;
  }
`;

export const SecondText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.19;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 1.21;
  }
`;

export const BannerWrap = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 6px 0 8px;
  background-color: var(--accent-color);
  overflow: hidden;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1440px;
    padding: 6px 0 16px;
  }
`;

export const CrossIcon = styled(CloseSharpIcon)`
  width: 24px;
  height: 24px;
  fill: var(--primary-text-color);

  @media screen and (min-width: 1280px) {
    width: 36px;
    height: 36px;
  }
`;
