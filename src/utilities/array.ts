export function sortByKey<T>(arr: T[], key: keyof T, ascending = true): T[] {
  return arr
    .slice()
    .sort(
      (a, b) =>
        (ascending ? 1 : -1) * (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)
    )
}
