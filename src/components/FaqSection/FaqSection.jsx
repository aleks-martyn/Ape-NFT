import { useState } from 'react';
import { QuestionItem } from 'components/QuestionItem';
import { StyledList } from './FaqSection.styled';
import textContent from '../../text-content.json';
import { createItems } from 'utils/createItems';
import { images } from 'faqImages';

export const QuestionList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { questions } = textContent;
  const faqs = createItems(questions, images);

  return (
    <StyledList>
      {faqs.map(({ title, text, src, alt, srcSet }, index) => (
        <QuestionItem
          key={index}
          index={index}
          currentIndex={currentIndex}
          title={title}
          text={text}
          src={src}
          alt={alt}
          srcSet={srcSet}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </StyledList>
  );
};
