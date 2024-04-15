import SmallImg from './images/about-mob.png';
import SmallImgX2 from './images/about-mob@2x.png';
import SmallImgX3 from './images/about-mob@3x.png';
import MiddleImg from './images/about-tab.png';
import MiddleImgX2 from './images/about-tab@2x.png';
import MiddleImgX3 from './images/about-tab@3x.png';
import BigImg from './images/about-desk.png';
import BigImgX2 from './images/about-desk@2x.png';
import BigImgX3 from './images/about-desk@3x.png';

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
