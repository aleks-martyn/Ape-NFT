import { Wrap, CrossIcon, Text, StyledForm, SubmitBtn } from './Mint.styled';

export const Mint = () => {
  return (
    <Wrap>
      <CrossIcon />

      <Text>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </Text>

      <StyledForm>
        <input></input>

        <input></input>

        <SubmitBtn type="submit">MINT</SubmitBtn>
      </StyledForm>
    </Wrap>
  );
};
