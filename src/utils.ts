import { PageValues } from './types/page';

const convertPhone = (phoneNumber: string): string =>
  phoneNumber.replace(/\D/g, '');

const hasSome = <T = PageValues>(values: T, ...items: T[]): boolean =>
  items.some((item) => item === values);

export { convertPhone, hasSome };
