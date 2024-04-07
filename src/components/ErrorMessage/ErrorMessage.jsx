import { ErrorMessage } from '@hookform/error-message';
import { Message } from './ErrorMessage.styled';

export const ErrorMessageComponent = ({ id, errors }) => (
  <ErrorMessage
    errors={errors}
    name={id}
    render={({ messages }) =>
      messages &&
      Object.entries(messages).map(([type, message]) => (
        <Message key={type}>{message}</Message>
      ))
    }
  />
);
