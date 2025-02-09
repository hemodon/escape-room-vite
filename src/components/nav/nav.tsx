import { Link } from 'react-router-dom';
import { Page, Path } from '../../const';
import { PageValues } from '../../types/page';

type NavProps = {
  isLogin: boolean;
  page: PageValues;
};

function Nav({ isLogin, page }: NavProps) {
  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <Link
            className={`link ${page === Page.Main ? 'active' : ''}`}
            to={Path.Main}
          >
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
