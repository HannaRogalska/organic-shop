export function isNumberOrString(value: unknown): value is number | string {
  return typeof value === 'string' || (typeof value === 'number' && Number.isFinite(value));
}

export function isOptionalAmount(value: unknown): value is number | string | null | undefined {
  return value === null || value === undefined || isNumberOrString(value);
}
