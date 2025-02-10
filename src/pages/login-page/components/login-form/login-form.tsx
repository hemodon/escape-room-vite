import { SubmitHandler, useForm } from 'react-hook-form';
import { Title } from '../../../../components/title/title';
import { PageValues } from '../../../../types/page';

type LoginFormProps = {
  page: PageValues;
};

type FormData = {
  email: string;
  password: string;
  'user-agreement': boolean;
};

function LoginForm({ page }: LoginFormProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const validatePassword = (value: string): string | boolean => {
    if (value.length < 3 || value.length > 15) {
      return 'Пароль должен содержать от 3 до 15 символов';
    } else if (!/[a-z]/.test(value)) {
      return 'Пароль должен содержать хотя бы одну букву';
    } else if (!/[0-9]/.test(value)) {
      return 'Пароль должен содержать хотя бы одну цифру';
    }
    return true;
  };

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <div className="login__form">
      <form
        className="login-form"
        action="https://echo.htmlacademy.ru/"
        method="post"
        onSubmit={handleSubmit(onSubmit)}
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
                placeholder="Адрес электронной почты"
                {...register('email', {
                  required: 'Требуется электронная почта',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Неверный адрес электронной почты',
                  },
                })}
              />
              {errors.email && (
                <span
                  style={{ fontSize: 'small', color: '#f2890f' }}
                  role="alert"
                >
                  {errors.email.message as string}
                </span>
              )}
            </div>
            <div className="custom-input login-form__input">
              <label className="custom-input__label" htmlFor="password">
                Пароль
              </label>
              <input
                type="password"
                id="password"
                placeholder="Пароль"
                {...register('password', {
                  required: 'Требуется пароль',
                  validate: validatePassword,
                })}
              />
              {errors.password && (
                <span
                  style={{ fontSize: 'small', color: '#f2890f' }}
                  role="alert"
                >
                  {errors.password.message as string}
                </span>
              )}
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
            {...register('user-agreement', { required: true })}
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
