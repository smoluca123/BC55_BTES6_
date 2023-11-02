export const formatCurrency = (n, region) => {
  return Intl.NumberFormat(region, {
    style: 'currency',
    currency: 'VND',
  }).format(n);
};
