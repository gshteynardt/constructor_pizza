export default (array: string[], inputItem: string): string[] => {
  return array.includes(inputItem)
  ? array.filter(item => item !== inputItem)
  : array.concat(inputItem);
};
