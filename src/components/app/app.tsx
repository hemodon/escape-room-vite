import { HelmetProvider } from 'react-helmet-async';
import { quests } from '../../moks/moks';
import { MainPage } from '../../pages/main-page/main-page';

function App(): JSX.Element {
  const isLogin = false;

  return (
    <HelmetProvider>
      <MainPage isLogin={isLogin} quests={quests} />;
    </HelmetProvider>
  );
}

export { App };
