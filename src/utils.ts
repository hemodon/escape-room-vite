const convertPhone = (phoneNumber: string): string =>
  phoneNumber.replace(/\D/g, '');

export { convertPhone };
