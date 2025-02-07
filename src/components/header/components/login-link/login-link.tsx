import cn from 'classnames';

type LoginLinkProps = {
  isLogin: boolean;
};
function LoginLink({ isLogin }: LoginLinkProps): JSX.Element {
  const className = cn('btn header__side-item', {
    ['btn--accent']: isLogin,
    ['header__login-btn']: !isLogin,
  });

  return (
    <a className={className} href="#">
      {isLogin ? 'Выйти' : 'Вход'}
    </a>
  );
}

export { LoginLink };
