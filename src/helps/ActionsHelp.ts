export function sortAscending(set: number[]): number[] {
    const sortedArray = [...set];
    return sortedArray.sort((a, b) => a - b);
}

export function sortDescending(set: number[]): number[] {
    const sortedArray = [...set];
    return sortedArray.sort((a, b) => b - a);
}

export function sumArray(set: number[]): number {
    return set.reduce((sum, currentValue) => sum + currentValue, 0);
}
