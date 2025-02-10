import { Link } from 'react-router-dom';
import { Page, Path } from '../../const';
import { PageValues } from '../../types/page';
import cn from 'classnames';
import { hasSome } from '../../utils';

type NavProps = {
  isLogin: boolean;
  page: PageValues;
};

function Nav({ isLogin, page }: NavProps) {
  const className = cn('link', {
    ['active']: hasSome(page, Page.Main, Page.Quest),
    ['not-disabled']: page === Page.Quest,
  });

  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <Link className={className} to={Path.Main}>
            Квесты
          </Link>
        </li>
        <li className="main-nav__item">
          <Link
            className={`link ${page === Page.Contacts ? 'active' : ''}`}
            to={Path.Contacts}
          >
            Контакты
          </Link>
        </li>
        {isLogin && (
          <li className="main-nav__item">
            <Link
              className={`link ${page === Page.MyQuests ? 'active' : ''}`}
              to={Path.MyQuests}
            >
              Мои бронирования
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export { Nav };
