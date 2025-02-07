import { Cards } from '../../components/cards/cards';
import { Container } from '../../components/container/container';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Main } from '../../components/main/main';
import { Title } from '../../components/title/title';
import { Page } from '../../const';
import { PageValues } from '../../types/page';
import { Quests } from '../../types/quest';
import { FilterForm } from './Components/filter-form/filter-form';

type MainPageProps = {
  isLogin: boolean;
  quests: Quests;
};

function MainPage({ isLogin, quests }: MainPageProps) {
  const page: PageValues = Page.Main;

  return (
    <div className="wrapper">
      <Header page={page} isLogin={isLogin} />
      <Main page={page}>
        <Container page={page}>
          <Title>
            <h1 className="subtitle page-content__subtitle">
              квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">
              Выберите тематику
            </h2>
          </Title>
          <div className="page-content__item">
            <FilterForm />
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <Cards quests={quests} />
        </Container>
      </Main>
      <Footer />
    </div>
  );
}

export { MainPage };
