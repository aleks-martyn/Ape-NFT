export const getHoverColor = (
  componentName,
  scrollPosition = 0,
  changeColorPosition = 0
) => {
  if (componentName === 'header') {
    if (scrollPosition > changeColorPosition) {
      return 'var(--accent-color)';
    } else {
      return 'var(--primary-text-color)';
    }
  } else {
    return 'var(--accent-color)';
  }
};
