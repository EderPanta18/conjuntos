export function sortAscending(...arrays: number[][]): number[] {
  const mergedArray = arrays.reduce((merged, currentArray) => {
    return merged.concat(currentArray);
  }, []);

  return mergedArray.sort((a, b) => a - b);
}

export function sortDescending(...arrays: number[][]): number[] {
  const mergedArray = arrays.reduce((merged, currentArray) => {
    return merged.concat(currentArray);
  }, []);

  return mergedArray.sort((a, b) => b - a);
}

export function sumArray(...arrays: number[][]): number {
  return arrays.flat().reduce((sum, currentValue) => sum + currentValue, 0);
}

