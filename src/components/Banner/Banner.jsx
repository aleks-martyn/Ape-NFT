import {
  BannerInnerWrap,
  BannerTextWrap,
  BannerText,
  CrossIcon,
} from './Banner.styled';

const bannerSlogans = ['Destroy stereotypes', 'HAVE NO LIMITS', 'Break rules'];

export const Banner = () => (
  <BannerInnerWrap>
    {bannerSlogans.map((slogan, index) => (
      <BannerTextWrap key={index}>
        <BannerText>{slogan}</BannerText>

        <CrossIcon width="36px" height="36px" />
      </BannerTextWrap>
    ))}
  </BannerInnerWrap>
);
