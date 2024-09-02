export function match(param: string) {
  const validParams = ['product-design', 'branding', 'illustration'];
  return validParams.includes(param);
}