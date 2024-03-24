import { Wrap, StyledBtn, BtnLabel } from './ControlButtons.styled';

export const ControlButtons = ({ changeSlide }) => {
  return (
    <Wrap>
      <StyledBtn type="button" onClick={() => changeSlide(-1)}>
        <BtnLabel>Prev</BtnLabel>
      </StyledBtn>

      <StyledBtn type="button" onClick={() => changeSlide(1)}>
        <BtnLabel>Next</BtnLabel>
      </StyledBtn>
    </Wrap>
  );
};
