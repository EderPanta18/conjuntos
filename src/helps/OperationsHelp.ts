export function mergeArrays(...arrays: number[][]): number[] {
  const mergedSet = arrays.reduce((mergedSet, currentArray) => {
    currentArray.forEach((item) => mergedSet.add(item));
    return mergedSet;
  }, new Set<number>());
  return Array.from(mergedSet);
}
