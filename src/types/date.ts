import { AllowedDate } from '../const';

type AllowedDateKeys = keyof typeof AllowedDate;

type AllowedDateValue = {
  text: string;
};

type AllowedDateType = {
  [key in AllowedDateKeys]: AllowedDateValue;
};

export type { AllowedDateType, AllowedDateKeys };
