import styled from '@emotion/styled';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

export const BannerInnerWrap = styled.div`
  display: flex;
  animation: move 30s linear infinite;
`;

export const BannerTextWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding-right: 24px;

  @media screen and (min-width: 1280px) {
    gap: 36px;
    padding-right: 36px;
  }
`;

export const BannerText = styled.p`
  font-family: 'Right Grotesk';
  font-size: 36px;
  font-weight: 900;
  line-height: 1;
  text-align: left;
  text-transform: uppercase;
  white-space: nowrap;

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const CrossIcon = styled(CloseSharpIcon)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  fill: var(--primary-text-color);
`;
