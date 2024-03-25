import { useState, useEffect } from 'react';
import { MindMap } from 'components/MindMap';
import { ControlButtons } from 'components/ControlButtons';
import { SliderWrap } from './Slider.styled';

export const Slider = ({items}) => {
  const [elements, setElements] = useState([]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setElements(items);
  }, [items]);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = elements.length - 1;
    } else {
      slideNumber = (slide + direction) % elements.length;
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
        <MindMap items={elements} slide={slide} />
      </SliderWrap>

      <ControlButtons changeSlide={changeSlide} />
    </>
  );
};
