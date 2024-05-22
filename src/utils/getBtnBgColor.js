export const getBtnBgColor = (scrollPosition, changeColorPosition) =>
  scrollPosition > changeColorPosition
    ? 'var(--modal-btn-bg-color)'
    : 'var(--btn-color)';
