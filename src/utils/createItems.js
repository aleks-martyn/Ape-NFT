export const createItems = (items, elements) =>
  items.map((item, index) => ({ ...item, ...elements[index] }));
