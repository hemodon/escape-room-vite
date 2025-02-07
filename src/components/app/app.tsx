import { quests } from '../../moks/moks';
import { MainPage } from '../../pages/main-page/main-page';

function App(): JSX.Element {
  const isLogin = false;

  return <MainPage isLogin={isLogin} quests={quests} />;
}

export { App };
