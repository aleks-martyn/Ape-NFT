import { PasswordIcon } from 'components/PasswordIcon';
import {
  Wrap,
  CrossIcon,
  Text,
  StyledForm,
  StyledLabel,
  StyledInput,
  SubmitBtn,
  StyledDiscordIcon,
} from './Mint.styled';

export const Mint = () => {
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    form.reset();
  };

  return (
    <Wrap>
      <CrossIcon />

      <Text>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </Text>

      <StyledForm name="join-form" onSubmit={handleSubmit}>
        <StyledLabel>
          <StyledDiscordIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="none"
          >
            <path d="M18.942 5.886c-1.295-0.569-2.679-0.983-4.126-1.218-0.178 0.302-0.385 0.708-0.529 1.031-1.539-0.217-3.063-0.217-4.573 0-0.143-0.323-0.356-0.729-0.535-1.031-1.449 0.235-2.835 0.651-4.129 1.221-2.611 3.707-3.319 7.323-2.965 10.886 1.732 1.215 3.41 1.953 5.061 2.436 0.407-0.527 0.771-1.087 1.084-1.677-0.596-0.213-1.167-0.475-1.707-0.78 0.143-0.1 0.283-0.204 0.418-0.311 3.291 1.446 6.866 1.446 10.118 0 0.137 0.107 0.277 0.211 0.418 0.311-0.541 0.306-1.114 0.569-1.71 0.782 0.313 0.589 0.675 1.15 1.084 1.677 1.652-0.483 3.332-1.221 5.064-2.438 0.415-4.131-0.71-7.713-2.973-10.889zM8.678 14.584c-0.988 0-1.798-0.866-1.798-1.921s0.793-1.923 1.798-1.923 1.815 0.866 1.798 1.923c0.002 1.055-0.793 1.921-1.798 1.921zM15.322 14.584c-0.988 0-1.798-0.866-1.798-1.921s0.793-1.923 1.798-1.923c1.005 0 1.815 0.866 1.798 1.923 0 1.055-0.793 1.921-1.798 1.921z"></path>
          </StyledDiscordIcon>

          <StyledInput
            type="text"
            name="username"
            placeholder="@username"
            required
          />
        </StyledLabel>

        <StyledLabel>
          <PasswordIcon />

          <StyledInput
            type="text"
            name="password"
            placeholder="Wallet address"
            required
          />
        </StyledLabel>

        <SubmitBtn type="submit">MINT</SubmitBtn>
      </StyledForm>
    </Wrap>
  );
};
