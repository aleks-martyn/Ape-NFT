export const getColor = (
  componentName,
  scrollPosition = 0,
  changeColorPosition = 0
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
