const Page = {
  Main: 'index',
  Quest: 'quest',
  Contacts: 'contacts',
  Login: 'login',
  Booking: 'booking',
  Favorites: 'my-quests',
} as const;

const AuthStatus = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown',
} as const;

const Path = {
  Main: '/',
  Quest: `/${Page.Quest}`,
  Contacts: `/${Page.Contacts}`,
  Login: `/${Page.Login}`,
  Booking: `/${Page.Booking}`,
  Favorites: `/${Page.Favorites}`,
  NotFound: '*',
} as const;

const Contacts = {
  Phone: '8 (999) 111-11-11',
  Address: 'Санкт-Петербург,<br />Набережная реки Карповка, д 5П',
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
    adventure: {
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
    sciFi: {
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
    middle: {
      text: 'Средний',
    },
    hard: {
      text: 'Сложный',
    },
  },
} as const;

export { Page, AuthStatus, Path, Contacts, Contact, FilterValues };
