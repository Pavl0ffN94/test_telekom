export const generateRandomId = () =>
  `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
