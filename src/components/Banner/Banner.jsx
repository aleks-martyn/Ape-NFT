import textContent from '../../text-content.json';
import { BannerList, BannerTextItem, BannerText } from './Banner.styled';

export const Banner = () => {
  const { slogans } = textContent;

  return (
    <BannerList>
      {slogans.map((slogan, index) => (
        <BannerTextItem key={index}>
          <BannerText>{slogan}</BannerText>
        </BannerTextItem>
      ))}
    </BannerList>
  );
};
