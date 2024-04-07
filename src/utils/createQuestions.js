export const createQuestions = (items, pictures) =>
  items.map((item, index) => ({ ...item, src: pictures[index] }));
