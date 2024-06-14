export function mergeArrays(...arrays: number[][]): number[] {
  const mergedSet = arrays.reduce((mergedSet, currentArray) => {
    currentArray.forEach((item) => mergedSet.add(item));
    return mergedSet;
  }, new Set<number>());
  return Array.from(mergedSet);
}

export function findCommonElements(...arrays: number[][]): number[] {
  if (arrays.length === 0) return [];
  let commonSet = new Set(arrays[0]);
  for (let i = 1; i < arrays.length; i++) {
    commonSet = new Set(arrays[i].filter(item => commonSet.has(item)));
  }
  return Array.from(commonSet);
}

export function differenceOfArrays(array1: number[], array2: number[]): number[] {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  const differenceSet = new Set<number>();

  set1.forEach(item => {
    if (!set2.has(item)) {
      differenceSet.add(item);
    }
  });

  return Array.from(differenceSet);
}


export function symmetricDifferenceOfArrays(array1: number[], array2: number[]): number[] {
  const merged = mergeArrays(array1, array2);
  const common = findCommonElements(array1, array2);
  return differenceOfArrays(merged, common);
}

