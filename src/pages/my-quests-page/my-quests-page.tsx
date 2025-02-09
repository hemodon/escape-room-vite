import { Cards } from '../../components/cards/cards';
import { Container } from '../../components/container/container';
import { Decor } from '../../components/decor/decor';
import { Footer } from '../../components/footer/footer';
import { TitlePage } from '../../components/title-page/title-page';
import { Header } from '../../components/header/header';
import { Main } from '../../components/main/main';
import { TitleWrapper } from '../../components/title-wrapper/title-wrapper';
import { Title } from '../../components/title/title';
import { Page } from '../../const';
import { userBookings } from '../../moks/moks';

type FavoritesProps = {
  isLogin: boolean;
};

function MyQuestsPage({ isLogin }: FavoritesProps): JSX.Element {
  const page = Page.MyQuests;
  const quests = userBookings.map(({ quest }) => quest);
  const dayPlaceBookings = userBookings.map(
    ({ date, time, peopleCount, location }) => ({
      date,
      time,
      peopleCount,
      location,
    })
  );

  return (
    <div className="wrapper">
      <TitlePage page={page} />
      <Header page={page} isLogin={isLogin} />
      <Main page={page}>
        <Decor
          page={page}
          previewImg={'img/content/maniac/maniac-bg-size-m.jpg'}
          coverImg={'img/content/maniac/maniac-bg-size-m@2x.jpg'}
          previewImgWebp={'img/content/maniac/maniac-bg-size-m.webp'}
          coverImgWebp={'img/content/maniac/maniac-bg-size-m@2x.webp'}
        />
        <Container page={page}>
          <TitleWrapper>
            <Title as="h1" page={page}>
              Мои бронирования
            </Title>
          </TitleWrapper>
          <Cards
            quests={quests}
            page={page}
            dayPlaceBookings={dayPlaceBookings}
          />
        </Container>
      </Main>
      <Footer />
    </div>
  );
}

export { MyQuestsPage };
