import { Wrap, CrossIcon, Text, StyledForm, StyledInput, SubmitBtn } from './Mint.styled';

export const Mint = () => {
  return (
    <Wrap>
      <CrossIcon />

      <Text>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </Text>

      <StyledForm name="join-form">
        <label>
          <StyledInput type="text" />
        </label>

        <label>
          <StyledInput type="password" />
        </label>

        <SubmitBtn type="submit">MINT</SubmitBtn>
      </StyledForm>
    </Wrap>
  );
};
