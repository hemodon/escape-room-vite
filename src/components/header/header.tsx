import { Contact, Page } from '../../const';
import { PageValues } from '../../types/page';
import { ContactLink } from '../contact-link/contact-link';
import { LoginLink } from './components/login-link/login-link';
import { Nav } from '../nav/nav';
import { Logo } from './components/logo/logo';

type HeaderProps = {
  page: PageValues;
  isLogin: boolean;
};

function Header(props: HeaderProps): JSX.Element {
  const { page, isLogin } = props;
  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo isMain={page === Page.Main} />
        <Nav isLogin={isLogin} page={page} />
        <div className="header__side-nav">
          <LoginLink isLogin={isLogin} />
          <ContactLink type={Contact.Phone} />
        </div>
      </div>
    </header>
  );
}

export { Header };
