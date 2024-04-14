import Img1 from './images/faq-img1.jpg';
import Img1X2 from './images/faq-img1@2x.jpg';
import Img1X3 from './images/faq-img1@3x.jpg';
import Img2 from './images/faq-img2.jpg';
import Img2X2 from './images/faq-img2@2x.jpg';
import Img2X3 from './images/faq-img2@3x.jpg';
import Img3 from './images/faq-img3.jpg';
import Img3X2 from './images/faq-img3@2x.jpg';
import Img3X3 from './images/faq-img3@3x.jpg';
import Img4 from './images/faq-img4.jpg';
import Img4X2 from './images/faq-img4@2x.jpg';
import Img4X3 from './images/faq-img4@3x.jpg';

export const images = [
  { src: Img1, srcSet: `${Img1X2} 2x, ${Img1X3} 3x` },
  { src: Img2, srcSet: `${Img2X2} 2x, ${Img2X3} 3x` },
  { src: Img3, srcSet: `${Img3X2} 2x, ${Img3X3} 3x` },
  { src: Img4, srcSet: `${Img4X2} 2x, ${Img4X3} 3x` },
];
