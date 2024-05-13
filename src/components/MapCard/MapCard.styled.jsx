import styled from '@emotion/styled';
import ArrowIcon from '../../images/up-left-arrow.svg';
import BigArrowIcon from '../../images/up-left-big-arrow.svg';

const getBgColor = index =>
  index === 3 ? 'var(--accent-color)' : 'var(--secondary-text-color)';

const getBeforeDisplay = index => (index === 3 ? 'inline-block' : 'none');

const getJustify = index => (index === 3 ? 'flex-end' : 'space-between');

export const Wrap = styled.li`
  display: flex;
  flex: 1 0 100%;
`;

export const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: ${({ index }) => getJustify(index)};
  width: 216px;
  height: 242px;
  padding: 24px 12px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  background-color: ${({ index }) => getBgColor(index)};

  &::before {
    content: '';
    display: ${({ index }) => getBeforeDisplay(index)};
    width: 48px;
    height: 48px;
    position: absolute;
    top: 12px;
    right: 12px;
    background-image: url(${ArrowIcon});

    @media screen and (min-width: 1280px) {
      width: 64px;
      height: 64px;
      background-image: url(${BigArrowIcon});
    }
  }

  @media screen and (min-width: 768px) {
    width: 284px;
    height: 242px;
    padding: 24px;
    border-radius: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 504px;
    height: 480px;
    border-radius: 24px;
  }
`;

export const CardText = styled.p`
  width: 192px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-align: left;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 128px;
    margin-left: auto;
  }

  @media screen and (min-width: 1280px) {
    width: 228px;
    font-size: 24px;
    line-height: 1.21;
  }
`;

export const CardTitle = styled.h3`
  font-family: 'Right Grotesk';
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
  text-align: left;
  text-transform: uppercase;

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: var(--primary-text-color);
`;

export const Linklabel = styled.span`
  display: block;
  width: 192px;
  font-family: 'Right Grotesk';
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
  text-align: left;
  text-transform: uppercase;

  @media screen and (min-width: 1280px) {
    width: 456px;
    font-size: 64px;
  }
`;
