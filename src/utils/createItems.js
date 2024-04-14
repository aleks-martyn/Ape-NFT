export const createItems = (items, pictures) =>
  items.map((item, index) => ({ ...item, ...pictures[index] }));
