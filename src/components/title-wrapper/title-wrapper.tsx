import cn from 'classnames';
import { PropsWithChildren } from 'react';

type TitleProps = PropsWithChildren<{
  isUnderlined?: boolean;
}>;

function TitleWrapper({ isUnderlined = false, children }: TitleProps): JSX.Element {
  const className = cn('page-content__title-wrapper', {
    ['page-content__title-wrapper--underlined']: isUnderlined,
  });

  return <div className={className}>{children}</div>;
}

export { TitleWrapper };
