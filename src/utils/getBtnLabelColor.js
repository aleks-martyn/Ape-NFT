export const getBtnLabelColor = (scrollPosition, changeColorPosition) =>
  scrollPosition > changeColorPosition
    ? 'var(--primary-text-color)'
    : 'var(--secondary-text-color)';
