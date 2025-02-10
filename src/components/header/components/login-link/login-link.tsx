import cn from 'classnames';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../../../const';

type LoginLinkProps = {
  isLogin: boolean;
};

function LoginLink({ isLogin }: LoginLinkProps): JSX.Element {
  const navigate = useNavigate();

  const handleLoginLinkClick = (evt: MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();
    if (isLogin) {
      navigate(Path.Main);
    }
    navigate(Path.Login);
  };

  const className = cn('btn header__side-item', {
    ['btn--accent']: isLogin,
    ['header__login-btn']: !isLogin,
  });

  return (
    <a onClick={handleLoginLinkClick} className={className} href="#">
      {isLogin ? 'Выйти' : 'Вход'}
    </a>
  );
}

export { LoginLink };
