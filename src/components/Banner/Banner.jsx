import textContent from '../../text-content.json';
import {
  BannerInnerWrap,
  BannerTextWrap,
  BannerText,
  CrossIcon,
} from './Banner.styled';

export const Banner = () => {
  const { slogans } = textContent;

  return (
    <BannerInnerWrap>
      {slogans.map((slogan, index) => (
        <BannerTextWrap key={index}>
          <BannerText>{slogan}</BannerText>

          <CrossIcon width="36px" height="36px" />
        </BannerTextWrap>
      ))}
    </BannerInnerWrap>
  );
};
