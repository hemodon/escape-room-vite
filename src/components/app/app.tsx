import { HelmetProvider } from 'react-helmet-async';
import { quests } from '../../moks/moks';
import { MainPage } from '../../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Path } from '../../const';
import { QuestPage } from '../../pages/quest-page/quest-page';
import { MyQuestsPage } from '../../pages/my-quests-page/my-quests-page';
import { ContactsPage } from '../../pages/contacts-page/contacts-page';

function App(): JSX.Element {
  const isLogin = true;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={Path.Main}
            element={<MainPage isLogin={isLogin} quests={quests} />}
          />
          <Route path={Path.Quest} element={<QuestPage isLogin={isLogin} />} />
          <Route
            path={Path.MyQuests}
            element={<MyQuestsPage isLogin={isLogin} />}
          />
          <Route
            path={Path.Contacts}
            element={<ContactsPage isLogin={isLogin} />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export { App };
