export const checkPersonType = (person) => {
  if ('diemToan' in person) {
    return 'Student';
  } else if ('workingDays' in person) {
    return 'Employee';
  } else if ('companyName' in person) {
    return 'Customer';
  } else return null;
};
