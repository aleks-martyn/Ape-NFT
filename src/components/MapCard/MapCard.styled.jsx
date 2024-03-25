import styled from '@emotion/styled';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const getBgColor = title =>
  title.includes('Learn')
    ? 'var(--accent-color)'
    : 'var(--secondary-text-color)';

export const Wrap = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 216px;
  height: 242px;
  padding: 24px 12px;
  border-radius: 12px;
  background-color: ${({ title }) => getBgColor(title)};

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

export const ArrowIcon = styled(NorthEastIcon)`
  margin-left: auto;
  width: 48px;
  height: 48px;
  fill: var(--primary-text-color);

  @media screen and (min-width: 1280px) {
    width: 64px;
    height: 64px;
`;

export const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 216px;
  height: 242px;
  padding: 24px 12px;
  border-radius: 12px;
  background-color: ${({ title }) => getBgColor(title)};
  text-decoration: none;
  color: var(--primary-text-color);

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
    font-size: 64px;
  }
`;
