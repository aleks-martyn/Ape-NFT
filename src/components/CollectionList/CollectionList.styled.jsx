import styled from '@emotion/styled';

const getTranslate = (slideNumber, percentage) => slideNumber * percentage;

export const Wrap = styled.ul`
  display: flex;
  transform: translateX(-${({ slide }) => getTranslate(slide, 100)}%);

  @media screen and (min-width: 768px) {
    gap: 24px;
    transform: translateX(-${({ slide }) => getTranslate(slide, 104.23)}%);
  }

  @media screen and (min-width: 1280px) {
    gap: 24px;
    transform: translateX(-${({ slide }) => getTranslate(slide, 102.33)}%);
  }
`;
