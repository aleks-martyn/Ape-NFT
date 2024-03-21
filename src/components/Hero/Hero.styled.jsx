import styled from '@emotion/styled';

export const StyledSection = styled.section`
  padding-top: 54px;

  @media screen and (min-width: 1280px) {
    padding-top: 16px;
  }
`;

export const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 8px;
  padding-right: 8px;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 16px;
    padding-right: 16px;
    text-align: start;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  padding-top: 36px;
  padding-bottom: 19px;
  border-radius: 12px;
  background-color: var(--accent-color);

  @media screen and (min-width: 768px) {
    position: relative;
    padding: 124px 72px 123px;
    border-radius: 16px;
  }

  @media screen and (min-width: 1280px) {
    padding: 200px 114px 200px;
    border-radius: 24px;
  }
`;

export const SectionTitle = styled.h1`
  display: inline-flex;
  gap: 10px;
  margin-bottom: 8px;
  color: var(--secondary-text-color);
  font-family: 'Right Grotesk';
  font-weight: 900;
  font-size: 44px;
  line-height: 1;
  letter-spacing: 0.01em;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    font-size: 92px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
    font-size: 164px;
  }
`;

export const Text = styled.p`
  color: var(--secondary-text-color);
  font-family: 'Biro Script Plus';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;

    &:last-of-type {
      margin-left: 120px;
    }
  }
`;

export const Image = styled.img`
  width: 216px;
  height: 284px;
  margin-top: 4px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 283px;
    height: 373px;
    margin-top: 0;
    position: absolute;
    bottom: 0;
    left: 213px;
  }

  @media screen and (min-width: 1280px) {
    width: 463px;
    height: 612px;
    left: 370px;
  }
`;

export const InnerWrap = styled.div`
  display: inline-flex;
  gap: 10px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
    gap: 16px;
    position: absolute;
    bottom: 35px;
    right: 72px;
  }

  @media screen and (min-width: 1280px) {
    gap: 28px;
    bottom: 80px;
    right: 114px;
  }
`;

export const Button = styled.button`
  width: 216px;
  padding: 10px 70px 12px;
  border-radius: 8px;
  border: none;
  background-color: var(--btn-color);

  &:hover span {
    color: var(--primary-text-color);
  }

  @media screen and (min-width: 768px) {
    width: 190px;
    padding: 10px 61px 12px;
    border-radius: 12px;
  }

  @media screen and (min-width: 1280px) {
    width: 337px;
    padding: 16px 100px 20px;
  }
`;

export const Span = styled.span`
  color: var(--secondary-text-color);
  font-family: 'Right Grotesk';
  font-weight: 900;
  font-size: 16px;
  line-height: 1.19;
  transition: color var(--tra);

  @media screen and (min-width: 1280px) {
    font-size: 28px;
    line-height: 1.21;
  }
`;

export const Paragraph = styled.p`
  width: 217px;
  color: var(--secondary-text-color);
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 190px;
    text-align: justify;
    text-indent: 30%;
  }

  @media screen and (min-width: 1280px) {
    width: 337px;
    font-size: 16px;
    line-height: 1.19;
    text-indent: 25%;
  }
`;
