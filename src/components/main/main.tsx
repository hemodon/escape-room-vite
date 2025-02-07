import { PropsWithChildren } from 'react';
import { PageValues } from '../../types/page';
import cn from 'classnames';
import { Page } from '../../const';

type MainProps = PropsWithChildren<{
  page: PageValues;
}>;

function Main({ page, children }: MainProps): JSX.Element {
  const className = cn({
    ['page-content']: page !== Page.Quest && page !== Page.Login,
    ['decorated-page']: page !== Page.Main,
    ['quest-page']: page === Page.Quest,
    ['login']: page === Page.Login,
  });
  return <main className={className}>{children}</main>;
}

export { Main };
