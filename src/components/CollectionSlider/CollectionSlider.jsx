import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { CollectionList } from 'components/CollectionList';
import { ControlButtons } from 'components/ControlButtons';
import { SliderWrap } from './CollectionSlider.styled';

export const CollectionSlider = ({ items }) => {
  const [elements, setElements] = useState([]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isMinTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isMaxTablet = useMediaQuery({ query: '(max-width: 1279px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  useEffect(() => {
    setElements(items);
  }, [items]);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    const getElementsAmount = () => {
      if (isMobile) {
        return elements.length;
      }
      if (isMinTablet && isMaxTablet) {
        return elements.length / 2;
      }
      if (isDesktop) {
        return elements.length / 4;
      }
    };

    const elementsAmount = getElementsAmount();

    if (slide + direction < 0) {
      slideNumber = elementsAmount - 1;
    } else {
      slideNumber = (slide + direction) % elementsAmount;
    }

    setSlide(slideNumber);
  };

  const handleTouchStart = e => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = e => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  return (
    <>
      <SliderWrap onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        <CollectionList items={elements} slide={slide} />
      </SliderWrap>

      <ControlButtons changeSlide={changeSlide} />
    </>
  );
};
