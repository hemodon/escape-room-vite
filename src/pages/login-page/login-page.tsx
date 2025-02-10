import { Container } from '../../components/container/container';
import { Decor } from '../../components/decor/decor';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Main } from '../../components/main/main';
import { TitlePage } from '../../components/title-page/title-page';
import { Page } from '../../const';
import { LoginForm } from './components/login-form/login-form';

function LoginPage() {
  const page = Page.Login;
  const isLogin = false;

  return (
    <div className="wrapper">
      <TitlePage page={page} />
      <Header page={page} isLogin={isLogin} />
      <Main page={page}>
        <Decor
          page={page}
          previewImg={'img/content/maniac/maniac-size-m.jpg'}
          coverImg={'img/content/maniac/maniac-size-m@2x.jpg'}
          previewImgWebp={'img/content/maniac/maniac-size-m.webp'}
          coverImgWebp={'img/content/maniac/maniac-size-m@2x.webp'}
        />
        <Container page={Page.Login}>
          <LoginForm page={page} />
        </Container>
      </Main>
      <Footer />
    </div>
  );
}

export { LoginPage };
