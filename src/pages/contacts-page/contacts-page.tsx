import { ContactLink } from '../../components/contact-link/contact-link';
import { Container } from '../../components/container/container';
import { Decor } from '../../components/decor/decor';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Main } from '../../components/main/main';
import { Subtitle } from '../../components/sub-title/subtitle';
import { TitlePage } from '../../components/title-page/title-page';
import { TitleWrapper } from '../../components/title-wrapper/title-wrapper';
import { Title } from '../../components/title/title';
import { Contacts, Page } from '../../const';
import { ContactValues } from '../../types/contact';

type ContactsProps = {
  isLogin: boolean;
};

function ContactsPage({ isLogin }: ContactsProps): JSX.Element {
  const page = Page.Contacts;
  const {
    Location: { address },
    Work,
    Phone,
    Email,
  } = Contacts;

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
          <TitleWrapper isUnderlined>
            <Subtitle as="p" page={page}>
              квесты в&nbsp;Санкт-Петербурге
            </Subtitle>
            <Title as="h1" page={page}>
              Контакты
            </Title>
          </TitleWrapper>
          <div className="contacts">
            <dl className="contacts__list">
              <div className="contacts__item">
                <dt className="contacts__dt">Адрес</dt>
                <dd className="contacts__dd">
                  <address className="contacts__address">{address}</address>
                </dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">Режим работы</dt>
                <dd className="contacts__dd">{Work}</dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">Телефон</dt>
                <dd className="contacts__dd">
                  <ContactLink type={Phone as ContactValues} />
                </dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">E–mail</dt>
                <dd className="contacts__dd">
                  <ContactLink type={Email as ContactValues} />
                </dd>
              </div>
            </dl>
            <div className="contacts__map">
              <div className="map">
                <div className="map__container" />
              </div>
            </div>
          </div>
        </Container>
      </Main>
      <Footer />
    </div>
  );
}

export { ContactsPage };
