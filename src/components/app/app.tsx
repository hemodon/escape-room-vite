import { HelmetProvider } from 'react-helmet-async';
import { quests } from '../../moks/moks';
import { MainPage } from '../../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Path } from '../../const';
import { QuestPage } from '../../pages/quest-page/quest-page';
import { MyQuestsPage } from '../../pages/my-quests-page/my-quests-page';
import { ContactsPage } from '../../pages/contacts-page/contacts-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { LoginPage } from '../../pages/login-page/login-page';

function App(): JSX.Element {
  const isLogin = false;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={Path.Main}
            element={<MainPage isLogin={isLogin} quests={quests} />}
          />
          <Route path={Path.Quest} element={<QuestPage isLogin={isLogin} />} />
          <Route path={Path.Login} element={<LoginPage />} />
          <Route
            path={Path.MyQuests}
            element={<MyQuestsPage isLogin={isLogin} />}
          />
          <Route
            path={Path.Contacts}
            element={<ContactsPage isLogin={isLogin} />}
          />
          <Route
            path={Path.NotFound}
            element={<NotFoundPage isLogin={isLogin} />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export { App };
