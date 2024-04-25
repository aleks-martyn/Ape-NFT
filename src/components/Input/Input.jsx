import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { ErrorMessageComponent } from 'components/ErrorMessage';
import { InputWrap, StyledLabel, StyledInput } from './Input.styled';

export const Input = ({ id, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const getLabel = id => (id === 'name' ? 'User name' : 'Wallet address');

  const getPatternMessage = id =>
    id === 'name' ? 'Wrong discord' : 'Wrong address';

  const getPatternValue = id => (id === 'name' ? /[A-Za-z]+/ : /[0-9]/);

  console.log(errors);

  return (
    <InputWrap>
      <StyledLabel htmlFor={id}></StyledLabel>

      <StyledInput
        aria-label={getLabel(id)}
        id={id}
        type="text"
        placeholder={placeholder}
        autoComplete="off"
        errors={errors}
        {...register(id, {
          required: 'This field is required',
          pattern: {
            value: getPatternValue(id),
            message: getPatternMessage(id),
          },
        })}
      />
      <ErrorMessageComponent id={id} errors={errors} />
    </InputWrap>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
