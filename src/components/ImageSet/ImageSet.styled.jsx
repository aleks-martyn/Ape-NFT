import styled from '@emotion/styled';

const getBottom = id => (id === 'hero' ? '-123px' : '0px');
const getRight = id => (id === 'hero' ? '249px' : '0px');

const getBottomWide = id => (id === 'hero' ? '-200px' : '0px');
const getRightWide = id => (id === 'hero' ? '440px' : '0px');

export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: ${({ id }) => getBottom(id)};
    right: ${({ id }) => getRight(id)};
  }

  @media screen and (min-width: 1280px) {
    bottom: ${({ id }) => getBottomWide(id)};
    right: ${({ id }) => getRightWide(id)};
  }
`;
