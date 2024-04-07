import { useState } from 'react';
import { QuestionItem } from 'components/QuestionItem';
import { StyledList } from './FaqSection.styled';
import img1 from '../../images/faq-img1.jpg';
import img2 from '../../images/faq-img2.jpg';
import img3 from '../../images/faq-img3.jpg';
import img4 from '../../images/faq-img4.jpg';
import textContent from '../../text-content.json';
import { createQuestions } from 'utils/createQuestions';

export const QuestionList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img1, img2, img3, img4];
  const { questions } = textContent;
  const faqs = createQuestions(questions, images);

  return (
    <StyledList>
      {faqs.map(({ title, text, src, alt }, index) => (
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
