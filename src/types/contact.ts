import { Contact } from '../const';

type ContactKeys = keyof typeof Contact;

type ContactValues = (typeof Contact)[ContactKeys];

export type { ContactKeys, ContactValues };
