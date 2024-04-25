import styled from '@emotion/styled';
import DiscordIcon from '../../images/discord-blue.svg';
import AddressIcon from '../../images/address-icon.svg';

export const InputWrap = styled.div`
  position: relative;
  display: flex;
`;

const getIcon = id => (id === 'name' ? DiscordIcon : AddressIcon);

export const StyledLabel = styled.label`
  position: relative;
  display: block;
  width: 48px;
  height: 48px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: var(--secondary-text-color);

  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${({ htmlFor }) => getIcon(htmlFor)});
  }

  @media screen and (min-width: 1280px) {
    width: 64px;
    height: 64px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
`;

const getBorderColorWithPlaceholder = (id, errors) => {
  const propName = id;
  return errors[propName]
    ? 'var(--accent-color)'
    : 'var(--secondary-text-color)';
};

const getBorderColor = (id, errors) => {
  const propName = id;
  return errors[propName] ? 'var(--accent-color)' : 'var(--primary-text-color)';
};

export const StyledInput = styled.input`
  width: 168px;
  height: 48px;
  padding: 17px 24px;
  border: 1px solid ${({ id, errors }) => getBorderColor(id, errors)};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: transparent;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-transform: uppercase;
  color: var(--primary-text-color);
  outline: none;

  &:placeholder-shown {
    border-color: ${({ id, errors }) =>
      getBorderColorWithPlaceholder(id, errors)};
  }

  &::placeholder {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.17;
    text-transform: uppercase;
    color: var(--placeholder-color);

    @media screen and (min-width: 1280px) {
      font-size: 16px;
      line-height: 1.19;
    }
  }

  @media screen and (min-width: 768px) {
    width: 200px;
  }

  @media screen and (min-width: 1280px) {
    width: 333px;
    height: 64px;
    padding: 22px 24px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.19;
  }
`;
