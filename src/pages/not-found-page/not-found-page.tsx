import { Container } from '../../components/container/container';
import { Decor } from '../../components/decor/decor';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Main } from '../../components/main/main';
import { TitlePage } from '../../components/title-page/title-page';
import { TitleWrapper } from '../../components/title-wrapper/title-wrapper';
import { Title } from '../../components/title/title';
import { Page } from '../../const';

type NotFoundPageProps = {
  isLogin: boolean;
};

function NotFoundPage({ isLogin }: NotFoundPageProps): JSX.Element {
  const page = Page.NotFound;

  return (
    <div className="wrapper">
      <TitlePage page={page} />
      <Header page={page} isLogin={isLogin} />
      <Main page={page}>
        <Decor
          page={page}
          previewImg={'../img/content/maniac/maniac-bg-size-m.jpg'}
          coverImg={'../img/content/maniac/maniac-bg-size-m@2x.jpg'}
          previewImgWebp={'../img/content/maniac/maniac-bg-size-m.webp'}
          coverImgWebp={'../img/content/maniac/maniac-bg-size-m@2x.webp'}
        />
        <Container page={page}>
          <TitleWrapper>
            <Title as="h1" page={page}>
              404: Страница не найдена
            </Title>
          </TitleWrapper>
        </Container>
      </Main>
      <Footer />
    </div>
  );
}

export { NotFoundPage };
