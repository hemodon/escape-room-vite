import { Link } from 'react-router-dom';
import { LogoSvg } from '../logo-svg/logo-svg';
import { Path } from '../../../../const';

type LogoProps = {
  isMain: boolean;
};

function Logo({ isMain }: LogoProps) {
  const className = 'logo header__logo';

  return isMain ? (
    <span className={className}>
      <LogoSvg />
    </span>
  ) : (
    <Link className={className} to={Path.Main} aria-label="Перейти на Главную">
      <LogoSvg />
    </Link>
  );
}

export { Logo };
