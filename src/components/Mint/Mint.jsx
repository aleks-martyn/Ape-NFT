import { useForm, FormProvider } from 'react-hook-form';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input } from 'components/Input';
import textContent from '../../text-content.json';
import { save } from 'utils/localStorageFunction';
import {
  Wrap,
  Text,
  StyledForm,
  SubmitBtn,
} from './Mint.styled';

export const Mint = () => {
  const methods = useForm({ criteriaMode: 'all' });

  const {
    formState: { isSubmitted, isSubmitSuccessful, isValid },
    reset,
    handleSubmit,
  } = methods;

  const notify = () =>
    toast('Success!', {
      autoClose: 3000,
      theme: 'colored',
      type: 'success',
      transition: Zoom,
    });

  const onSubmit = data => {
    console.log(data);
    save('user-data', data);
    reset();
    notify();
  };

  const {
    mint: { text },
  } = textContent;

  return (
    <Wrap>
      <Text>{text}</Text>

      <FormProvider {...methods}>
        <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
          <Input id="name" placeholder="@username" />

          <Input id="wallet-address" placeholder="Wallet address" />

          <SubmitBtn type="submit">
            {(!isSubmitted || isValid) && 'MINT'}
            {isSubmitted && isSubmitSuccessful && 'MINTED'}
            {isSubmitted && !isSubmitSuccessful && !isValid && 'ERROR'}
          </SubmitBtn>

          <ToastContainer />
        </StyledForm>
      </FormProvider>
    </Wrap>
  );
};
