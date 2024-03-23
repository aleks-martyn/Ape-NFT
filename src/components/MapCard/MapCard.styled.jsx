import styled from '@emotion/styled';

const getBgColor = title =>
  title === 'Learn more in mind map'
    ? 'var(--accent-color)'
    : 'var(--secondary-text-color)';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 216px;
  height: 242px;
  padding: 24px 12px;
  border-radius: 12px;
  background-color: ${({title}) => getBgColor(title)};

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
