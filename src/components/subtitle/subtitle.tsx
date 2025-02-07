import { FC, ReactNode } from 'react';
import cn from 'classnames';
import { PageValues } from '../../types/page';
import { Page } from '../../const';

interface Props {
  as?: 'h1' | 'p';
  page: PageValues;
  children: ReactNode;
}

const Subtitle: FC<Props> = ({ as = 'h1', page, children }) => {
  const Component = as;
  const className = cn('subtitle', {
    ['page-content__subtitle']:
      page === Page.Main || page === Page.Booking || page === Page.Contacts,
    ['quest-page__subtitle']: page === Page.Quest,
    ['subtitle--size-l']: page === Page.Booking,
  });

  return (
    <Component className={className}>
      {page === Page.Quest && <span className="visually-hidden">Жанр:</span>}
      {children}
    </Component>
  );
};

export { Subtitle };
