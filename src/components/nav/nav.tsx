import { Page } from '../../const';

type NavProps = {
  isLogin: boolean;
};

function Nav({ isLogin }: NavProps) {
  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <a className="link active" href={`${Page.Main}.html`}>
            Квесты
          </a>
        </li>
        <li className="main-nav__item">
          <a className="link" href={`${Page.Contacts}.html`}>
            Контакты
          </a>
        </li>
        {isLogin && (
          <li className="main-nav__item">
            <a className="link" href={`${Page.Favorites}.html`}>
              Мои бронирования
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export { Nav };
