export const getBtnHoverColor = (scrollPosition, changeColorPosition) =>
  scrollPosition > changeColorPosition
    ? 'var(--accent-color)'
    : 'var(--primary-text-color)';
