import styled from '@emotion/styled';
import NorthEastIcon from '@mui/icons-material/NorthEast';

export const Wrap = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: 1fr 1fr;
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

export const ArrowIcon = styled(NorthEastIcon)`
  margin-left: auto;
  width: 48px;
  height: 48px;
  fill: var(--primary-text-color);

  @media screen and (min-width: 1280px) {
    width: 64px;
    height: 64px;
`;
