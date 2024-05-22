export const getBgColor = (
  componentName,
  scrollPosition = 0,
  changeColorPosition = 0
) => {
  if (componentName === 'header') {
    if (scrollPosition > changeColorPosition) {
      return 'var(--modal-btn-bg-color)';
    } else {
      return 'var(--btn-color)';
    }
  } else {
    return 'var(--modal-btn-bg-color)';
  }
};
