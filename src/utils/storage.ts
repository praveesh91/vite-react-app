export const setItem = (key: string, value: any): void =>
  localStorage.setItem(key, JSON.stringify(value));

export const getItem = (key: string): any | null => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const removeItem = (key: string): void => localStorage.removeItem(key);
