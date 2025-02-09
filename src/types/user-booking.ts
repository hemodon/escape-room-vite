import { AllowedDateKeys } from './date';
import { Location } from './location';
import { Quest } from './quest';

type UserBooking = {
  date: AllowedDateKeys;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: Location;
  quest: Quest;
};

type UserBookings = UserBooking[];

type DayPlaceBooking = Pick<
UserBooking,
  'date' | 'time' | 'peopleCount' | 'location'
>;

export type { UserBookings, DayPlaceBooking };
