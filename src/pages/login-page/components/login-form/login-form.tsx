import { Title } from '../../../../components/title/title';
import { PageValues } from '../../../../types/page';

type LoginFormProps = {
  page: PageValues;
};

function LoginForm({ page }: LoginFormProps):JSX.Element {
  return (
    <div className="login__form">
      <form
        className="login-form"
        action="https://echo.htmlacademy.ru/"
        method="post"
      >
        <div className="login-form__inner-wrapper">
          <Title as="h1" page={page}>
            Вход
          </Title>
          <div className="login-form__inputs">
            <div className="custom-input login-form__input">
              <label className="custom-input__label" htmlFor="email">
                E&nbsp;–&nbsp;mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Адрес электронной почты"
                required
              />
            </div>
            <div className="custom-input login-form__input">
              <label className="custom-input__label" htmlFor="password">
                Пароль
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Пароль"
                required
              />
            </div>
          </div>
          <button
            className="btn btn--accent btn--general login-form__submit"
            type="submit"
          >
            Войти
          </button>
        </div>
        <label className="custom-checkbox login-form__checkbox">
          <input
            type="checkbox"
            id="id-order-agreement"
            name="user-agreement"
            required
          />
          <span className="custom-checkbox__icon">
            <svg width={20} height={17} aria-hidden="true">
              <use xlinkHref="#icon-tick" />
            </svg>
          </span>
          <span className="custom-checkbox__label">
            Я&nbsp;согласен с&nbsp;
            <a className="link link--active-silver link--underlined" href="#">
              правилами обработки персональных данных
            </a>
            &nbsp;и пользовательским соглашением
          </span>
        </label>
      </form>
    </div>
  );
}

export { LoginForm };
