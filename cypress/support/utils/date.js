export function converteDate(date) {
  return new Date(date).toISOString().split('T')[0];
}