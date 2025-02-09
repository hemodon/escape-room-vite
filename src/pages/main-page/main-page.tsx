import { Cards } from '../../components/cards/cards';
import { Container } from '../../components/container/container';
import { Footer } from '../../components/footer/footer';
import { TitlePage } from '../../components/title-page/title-page';
import { Header } from '../../components/header/header';
import { Main } from '../../components/main/main';
import { Subtitle } from '../../components/sub-title/subtitle';
import { TitleWrapper } from '../../components/title-wrapper/title-wrapper';
import { Title } from '../../components/title/title';
import { Page } from '../../const';
import { Quests } from '../../types/quest';
import { FilterForm } from './Components/filter-form/filter-form';

type MainPageProps = {
  isLogin: boolean;
  quests: Quests;
};

function MainPage({ isLogin, quests }: MainPageProps) {
  const page = Page.Main;

  return (
    <div className="wrapper">
      <TitlePage page={page} />
      <Header page={page} isLogin={isLogin} />
      <Main page={page}>
        <Container page={page}>
          <TitleWrapper>
            <Subtitle as="h1" page={page}>
              квесты в Санкт-Петербурге
            </Subtitle>
            <Title as="h2" page={page}>
              Выберите тематику
            </Title>
          </TitleWrapper>
          <div className="page-content__item">
            <FilterForm />
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <Cards quests={quests} page={page} />
        </Container>
      </Main>
      <Footer />
    </div>
  );
}

export { MainPage };
