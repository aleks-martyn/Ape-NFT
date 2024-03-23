import { Wrap, CardText, CardTitle, ArrowIcon } from './MapCard.styled';

export const MapCard = ({ title, text, index }) => {
  return (
    <Wrap title={title}>
      {index !== 3 ? <CardText>{text}</CardText> : <ArrowIcon />}
      <CardTitle>{title}</CardTitle>
    </Wrap>
  );
};
