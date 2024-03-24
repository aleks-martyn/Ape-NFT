import {
  Wrap,
  CardText,
  CardTitle,
  ArrowIcon,
  StyledLink,
  Linklabel,
} from './MapCard.styled';

export const MapCard = ({ title, text, index }) => {
  return (
    <>
      {index !== 3 ? (
        <Wrap title={title}>
          <CardText>{text}</CardText>

          <CardTitle>{title}</CardTitle>
        </Wrap>
      ) : (
        <StyledLink
          href="https://en.wikipedia.org/wiki/Non-fungible_token"
          target="_blank"
          rel="noreferrer noopener"
          title={title}
        >
          <ArrowIcon />

          <Linklabel>
            Learn
            <br /> more
            <br /> in mind map
          </Linklabel>
        </StyledLink>
      )}
    </>
  );
};
