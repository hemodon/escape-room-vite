import { useParams } from 'react-router-dom';
import { Container } from '../../components/container/container';
import { Decor } from '../../components/decor/decor';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Main } from '../../components/main/main';
import { QuestTags } from '../../components/quest-tags/quest-tags';
import { Subtitle } from '../../components/sub-title/subtitle';
import { TitlePage } from '../../components/title-page/title-page';
import { Title } from '../../components/title/title';
import { FilterValues, Page } from '../../const';
import { questMains } from '../../moks/moks';

type QuestPageProps = {
  isLogin: boolean;
};

function QuestPage({ isLogin }: QuestPageProps): JSX.Element {
  const page = Page.Quest;

  const { questId } = useParams();
  const quest = questMains.find(({ id }) => id === questId);

  if (!quest) {
    return <p>404, page not found</p>;
  }

  const {
    title,
    description,
    previewImg,
    previewImgWebp,
    coverImg,
    coverImgWebp,
    level,
    type,
    peopleMinMax,
  } = quest;
  const genreQuest = FilterValues.type[type].text;

  return (
    <div className="wrapper">
      <TitlePage page={page} />
      <Header page={page} isLogin={isLogin} />
      <Main page={page}>
        <Decor
          page={page}
          previewImg={previewImg}
          coverImg={coverImg}
          previewImgWebp={previewImgWebp}
          coverImgWebp={coverImgWebp}
        />
        <Container page={page}>
          <div className="quest-page__content">
            <Title as="h1" page={page}>
              {title}
            </Title>
            <Subtitle as="p" page={page}>
              {genreQuest}
            </Subtitle>
            <QuestTags peopleMinMax={peopleMinMax} level={level} page={page} />
            <p className="quest-page__description">{description}</p>
            <a
              className="btn btn--accent btn--cta quest-page__btn"
              href="booking.html"
            >
              Забронировать
            </a>
          </div>
        </Container>
      </Main>
      <Footer />
    </div>
  );
}

export { QuestPage };
