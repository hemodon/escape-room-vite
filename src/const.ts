const Page = {
  Main: 'index',
  Quest: 'quest',
  Contacts: 'contacts',
  Login: 'login',
  Booking: 'booking',
  MyQuests: 'my-quests',
  NotFound: 'not-found',
} as const;

const PageTitle = {
  [Page.Main]: '',
  [Page.Quest]: 'Квест',
  [Page.Contacts]: 'Контакты',
  [Page.Login]: 'Авторизация',
  [Page.Booking]: 'Бронирование квеста',
  [Page.MyQuests]: 'Мои бронирования',
  [Page.NotFound]: 'Страница отсутствует',
} as const;

const AuthStatus = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown',
} as const;

const Path = {
  Main: '/',
  Quest: `/${Page.Quest}/:questId`,
  Contacts: `/${Page.Contacts}`,
  Login: `/${Page.Login}`,
  Booking: `/${Page.Booking}`,
  MyQuests: `/${Page.MyQuests}`,
  NotFound: '*',
} as const;

const Contacts = {
  Phone: '8 (999) 111-11-11',
  Location: {
    address: 'Санкт-Петербург,<br />Набережная реки Карповка, д 5П',
    coords: [30.317359, 30.317359],
  },
  Work: 'Ежедневно, с&nbsp;10:00 до&nbsp;22:00',
  Email: 'info@escape-room.ru',
};

const Contact = {
  Phone: 'tel',
  Email: 'mailto',
} as const;

const FilterValues = {
  type: {
    all: {
      text: 'Все квесты',
      icon: {
        name: 'icon-all-quests',
        width: '26',
        height: '30',
      },
    },
    adventures: {
      text: 'Приключения',
      icon: {
        name: 'icon-adventure',
        width: '36',
        height: '30',
      },
    },
    horror: {
      text: 'Ужасы',
      icon: {
        name: 'icon-horror',
        width: '30',
        height: '30',
      },
    },
    mystic: {
      text: 'Мистика',
      icon: {
        name: 'icon-mystic',
        width: '30',
        height: '30',
      },
    },
    detective: {
      text: 'Детектив',
      icon: {
        name: 'icon-detective',
        width: '40',
        height: '30',
      },
    },
    'sci-fi': {
      text: 'Sci-fi',
      icon: {
        name: 'icon-sci-fi',
        width: '28',
        height: '30',
      },
    },
  },
  level: {
    any: {
      text: 'Любой',
    },
    easy: {
      text: 'Лёгкий',
    },
    medium: {
      text: 'Средний',
    },
    hard: {
      text: 'Сложный',
    },
  },
} as const;

const AllowedDate = {
  today: {
    text: 'сегодня',
  },
  tomorrow: {
    text: 'завтра',
  },
} as const;

export {
  Page,
  AuthStatus,
  Path,
  Contacts,
  Contact,
  FilterValues,
  AllowedDate,
  PageTitle,
};
