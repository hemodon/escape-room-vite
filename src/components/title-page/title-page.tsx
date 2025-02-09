import { Helmet } from 'react-helmet-async';
import { PageValues } from '../../types/page';
import { Page, PageTitle } from '../../const';

type TitlePageProps = {
  page: PageValues;
};

function TitlePage({ page }: TitlePageProps) {
  return (
    <Helmet>
      `${PageTitle[page]}${page !== Page.Main && ' - '}Escape Room`
    </Helmet>
  );
}

export { TitlePage };
