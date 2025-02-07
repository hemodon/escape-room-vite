import cn from 'classnames';
import { PropsWithChildren } from 'react';
import { PageValues } from '../../types/page';
import { Page } from '../../const';

type ContainerProps = PropsWithChildren<{
  page: PageValues;
}>;

function Container({ page, children }: ContainerProps): JSX.Element {
  const className = cn('container', {
    ['container--size-l']: page === Page.Quest || page === Page.Login,
    ['container--size-s']: page === Page.Booking,
  });

  return <div className={className}>{children}</div>;
}

export { Container };
