import PropTypes from 'prop-types';
import { Wrap, StyledBtn, BtnLabel } from './ControlButtons.styled';

export const ControlButtons = ({ changeSlide }) => (
  <Wrap>
    <StyledBtn type="button" onClick={() => changeSlide(-1)}>
      <BtnLabel>Prev</BtnLabel>
    </StyledBtn>

    <StyledBtn type="button" onClick={() => changeSlide(1)}>
      <BtnLabel>Next</BtnLabel>
    </StyledBtn>
  </Wrap>
);

ControlButtons.propTypes = {
  changeSlide: PropTypes.func.isRequired,
};
