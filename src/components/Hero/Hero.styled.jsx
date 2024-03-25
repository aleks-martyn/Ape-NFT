import styled from '@emotion/styled';
import { Link } from 'react-scroll';

export const StyledSection = styled.section`
  margin-top: 54px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 36px;
  padding-bottom: 19px;
  border-radius: 12px;
  background-color: var(--accent-color);

  @media screen and (min-width: 360px) and (max-width: 480px) {
    width: 96%;
  }

  @media screen and (min-width: 481px) {
    max-width: 462px;
  }

  @media screen and (min-width: 768px) {
    max-width: 736px;
    padding-top: 123px;
    padding-bottom: 123px;
    border-radius: 16px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1408px;
    margin-top: 16px;
    padding-top: 200px;
    padding-bottom: 200px;
    border-radius: 24px;
  }
`;

export const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 64px;
  padding-right: 64px;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 72px;
    padding-right: 72px;
    text-align: start;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 130px;
    padding-right: 130px;
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
  margin-top: 4px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    position: absolute;
    bottom: -123px;
    left: 207px;
  }

  @media screen and (min-width: 1280px) {
    bottom: -200px;
    left: 380px;
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
    bottom: -90px;
    right: 72px;
  }

  @media screen and (min-width: 1280px) {
    gap: 28px;
    bottom: -125px;
    right: 130px;
  }
`;

export const StyledLink = styled(Link)`
  padding: 10px 70px 12px;
  border-radius: 8px;
  border: none;
  text-decoration: none;
  background-color: var(--btn-color);

  &:hover span {
    color: var(--primary-text-color);
  }

  @media screen and (min-width: 768px) {
    padding: 10px 61px 12px;
    border-radius: 12px;
  }

  @media screen and (min-width: 1280px) {
    padding: 16px 110px 20px;
  }
`;

export const LinkLabel = styled.span`
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
