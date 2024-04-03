import { useFormContext } from 'react-hook-form';
import { InputWrap, StyledLabel, StyledInput } from './Input.styled';

export const Input = ({ id, placeholder, children }) => {
    const { register } = useFormContext();

  return (
    <InputWrap>
      <StyledLabel htmlFor={id}>{children}</StyledLabel>

      <StyledInput
        id={id}
        type="text"
        placeholder={placeholder}
        autoComplete="off"
        {...register(id, {
          required: {
            value: true,
            message: 'required',
          },
        })}
      />
    </InputWrap>
  );
};
