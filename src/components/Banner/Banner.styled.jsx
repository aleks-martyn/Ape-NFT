import styled from '@emotion/styled';
import CrossIcon from '../../images/cross.svg';

export const BannerList = styled.ul`
  display: flex;
  animation: move 30s linear infinite;
`;

export const BannerTextItem = styled.li`
  position: relative;
  padding-right: 84px;

  &::after {
    content: '';
    display: inline-block;
    width: 36px;
    height: 36px;
    position: absolute;
    top: 2px;
    right: 24px;
    background-image: url(${CrossIcon});

    @media screen and (min-width: 1280px) {
      top: 19px;
      right: 36px;
    }
  }

  @media screen and (min-width: 1280px) {
    padding-right: 108px;
  }
`;

export const BannerText = styled.p`
  padding-bottom: 2px;
  font-family: 'Right Grotesk';
  font-size: 36px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;

  @media screen and (min-width: 1280px) {
    padding-bottom: 0;
    font-size: 64px;
  }
`;
