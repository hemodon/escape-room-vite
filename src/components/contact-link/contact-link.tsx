import cn from 'classnames';
import { ContactValues } from '../../types/contact';
import { Contact, Contacts } from '../../const';
import { convertPhone } from '../../utils';

type ContactLinkProps = {
  isHeader?: boolean;
  type: ContactValues;
};

function ContactLink({ isHeader = true, type }: ContactLinkProps) {
  const className = cn('link', {
    ['header__side-item header__phone-link']: isHeader,
  });
  const href =
    type === Contact.Phone
      ? `${type}:${convertPhone(Contacts.Phone)}`
      : `${type}:${Contacts.Email}`;
  const text =
    type === Contact.Phone ? `${Contacts.Phone}` : `${Contacts.Email}`;

  return (
    <a className={className} href={href}>
      {text}
    </a>
  );
}

export { ContactLink };
