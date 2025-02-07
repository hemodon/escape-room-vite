import { LogoSvg } from '../logo-svg/logo-svg';

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
    <a className={className} href="index.html" aria-label="Перейти на Главную">
      <LogoSvg />
    </a>
  );
}

export { Logo };
