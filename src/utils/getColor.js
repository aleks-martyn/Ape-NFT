export const getColor = (
  componentName,
  scrollPosition,
  changeColorPosition
) => {
  if (componentName === 'header') {
    if (scrollPosition > changeColorPosition) {
      return 'var(--primary-text-color)';
    } else {
      return 'var(--secondary-text-color)';
    }
  } else {
    return 'var(--primary-text-color)';
  }
};
