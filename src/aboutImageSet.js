import SmallImg from './images/about-mob.webp';
import SmallImgX2 from './images/about-mob@2x.webp';
import SmallImgX3 from './images/about-mob@3x.webp';
import MiddleImg from './images/about-tab.webp';
import MiddleImgX2 from './images/about-tab@2x.webp';
import MiddleImgX3 from './images/about-tab@3x.webp';
import BigImg from './images/about-desk.webp';
import BigImgX2 from './images/about-desk@2x.webp';
import BigImgX3 from './images/about-desk@3x.webp';

export const images = [
  {
    img: BigImg,
    imgX2: BigImgX2,
    imgX3: BigImgX3,
    screenDimension: '(min-width: 1280px)',
  },
  {
    img: MiddleImg,
    imgX2: MiddleImgX2,
    imgX3: MiddleImgX3,
    screenDimension: '(min-width: 768px)',
  },
  {
    img: SmallImg,
    imgX2: SmallImgX2,
    imgX3: SmallImgX3,
    screenDimension: '(max-width: 767px)',
  },
];
