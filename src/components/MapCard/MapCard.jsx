import { Wrap, CardTitle } from './MapCard.styled';

export const MapCard = ({ title, children }) => {
  return (
    <Wrap title={title}>
      {children}
      <CardTitle>{title}</CardTitle>
    </Wrap>
  );
};
