import styled from '@emotion/styled';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px;
  }
`;

export const CrossIcon = styled(CloseSharpIcon)`
  width: 36px;
  height: 36px;
  fill: var(--primary-text-color);
`;

export const Text = styled.p`
  width: 216px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 397px;
    font-size: 16px;
    line-height: 1.19;
  }

  @media screen and (min-width: 1280px) {
    width: 581px;
    font-size: 24px;
    line-height: 1.21;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 216px;

  @media screen and (min-width: 768px) {
    width: 248px;
  }

  @media screen and (min-width: 1280px) {
    width: 397px;
    gap: 24px;
  }
`;

export const StyledDiscordIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 24px;
  height: 24px;
  transform: translate(-50%, -50%);
  fill: var(--discord-icon-color);
`;

export const SubmitBtn = styled.button`
  padding: 10px 80px 12px;
  border: none;
  border-radius: 8px;
  color: var(--primary-text-color);
  background-color: var(--accent-color);
  font-family: 'Right Grotesk';
  font-weight: 900;
  font-size: 16px;
  line-height: 1.19;
  transition: color var(--tra);

  &:hover {
    color: var(--secondary-text-color);
  }

  @media screen and (min-width: 1280px) {
    padding: 16px 140px 20px;
    border-radius: 12px;
    font-size: 28px;
    line-height: 1.21;
  }
`;
