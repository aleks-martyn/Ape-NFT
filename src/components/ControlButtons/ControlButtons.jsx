import { Wrap, StyledBtn, BtnLabel } from './ControlButtons.styled';

export const ControlButtons = () => {
  return (
    <Wrap>
      <StyledBtn type="button">
        <BtnLabel>Prev</BtnLabel>
      </StyledBtn>

      <StyledBtn type="button">
        <BtnLabel>Next</BtnLabel>
      </StyledBtn>
    </Wrap>
  );
};
