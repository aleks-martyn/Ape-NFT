import PropTypes from 'prop-types';
import { LogoIcon } from 'components/LogoIcon';
import { StyledLink } from './LogoLink.styled';

export const LogoLink = ({ onClick, component }) => (
  <StyledLink
    aria-label="Logo"
    to="/"
    onClick={() => onClick()}
    component={component}
  >
    <LogoIcon />
  </StyledLink>
);

LogoLink.propTypes = {
  onClick: PropTypes.func,
  component: PropTypes.string.isRequired,
};
