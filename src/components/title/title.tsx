import { FC, ReactNode } from 'react';
import cn from 'classnames';
import { PageValues } from '../../types/page';
import { Page } from '../../const';
import { hasSome } from '../../utils';

interface Props {
  as?: 'h1' | 'h2' | 'p';
  page: PageValues;
  children: ReactNode;
}

const Title: FC<Props> = ({ as = 'h1', page, children }) => {
  const Component = as;
  const className = cn('title', {
    ['title--size-m page-content__title']: hasSome(
      page,
      Page.Main,
      Page.Booking,
      Page.MyQuests,
      Page.Contacts
    ),
    ['title--uppercase']: hasSome(page, Page.Booking, Page.Quest),
    ['title--size-l quest-page__title']: page === Page.Quest,
    ['title--size-s login-form__title']: page === Page.Login,
  });

  return <Component className={className}>{children}</Component>;
};

export { Title };
