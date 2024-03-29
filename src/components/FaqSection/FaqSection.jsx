import { useState } from 'react';
import { QuestionItem } from 'components/QuestionItem';
import { StyledList } from './FaqSection.styled';
import img1 from '../../images/faq-img1.jpg';
import img2 from '../../images/faq-img2.jpg';
import img3 from '../../images/faq-img3.jpg';
import img4 from '../../images/faq-img4.jpg';

const questions = [
  {
    title: 'WHAT IS AN NFT COLLECTION?',
    text: 'An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.',
    src: `${img1}`,
    alt: 'First Ape',
  },
  {
    title: 'HOW DO I PURCHASE NFTS FROM A COLLECTION?',
    text: 'To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace.',
    src: `${img2}`,
    alt: 'Second Ape',
  },
  {
    title: 'CAN I SELL OR TRADE NFTS FROM A COLLECTION?',
    text: 'Yes, you can sell or trade NFTs from a collection like you would other digital assets.',
    src: `${img3}`,
    alt: 'Third Ape',
  },
  {
    title: 'WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?',
    text: "As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights.",
    src: `${img4}`,
    alt: 'Fourth Ape',
  },
];

export const QuestionList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <StyledList>
      {questions.map(({ title, text, src, alt }, index) => (
        <QuestionItem
          key={index}
          index={index}
          currentIndex={currentIndex}
          title={title}
          text={text}
          src={src}
          alt={alt}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </StyledList>
  );
};
