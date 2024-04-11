import PropTypes from 'prop-types';
import { StyledContainer } from './Container.styled';

export const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
