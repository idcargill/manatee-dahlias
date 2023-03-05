export const addYearsToExpirationDate = (
  originalDate: Date,
  increment: number
): Date => {
  originalDate.setFullYear(originalDate.getFullYear() + increment);
  return originalDate;
};

export interface DataSourceI {
  resolvers: any[];
}
