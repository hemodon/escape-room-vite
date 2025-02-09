import { UserBookings } from '../types/user-booking';
import { QuestMain, Quests } from '../types/quest';

const quests: Quests = [
  {
    id: '0a6b665c-7191-4e09-96a5-b091f45f108f',
    title: 'Склеп',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/crypt.jpg',
    previewImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/crypt.webp',
    level: 'hard',
    type: 'horror',
    peopleMinMax: [2, 5],
  },
  {
    id: 'e624381d-8eec-4b12-b145-3e11e22bd877',
    title: 'Маньяк',
    previewImg:
      'https://grading.design.htmlacademy.pro/static/quest/maniac.jpg',
    previewImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/maniac.webp',
    level: 'medium',
    type: 'horror',
    peopleMinMax: [3, 6],
  },
  {
    id: 'a8d04b9d-24a3-45b0-ab02-739fbb60c682',
    title: 'Ритуал',
    previewImg:
      'https://grading.design.htmlacademy.pro/static/quest/ritual.jpg',
    previewImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/ritual.webp',
    level: 'hard',
    type: 'mystic',
    peopleMinMax: [3, 5],
  },
  {
    id: '41ec1121-8771-47c3-b2d2-891c7806b7dc',
    title: 'Тайны старого особняка',
    previewImg:
      'https://grading.design.htmlacademy.pro/static/quest/palace.jpg',
    previewImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/palace.webp',
    level: 'easy',
    type: 'detective',
    peopleMinMax: [2, 5],
  },
  {
    id: 'da61fe91-bff2-4467-9606-d82dd79032e1',
    title: 'Хижина в лесу',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/hut.jpg',
    previewImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/hut.webp',
    level: 'medium',
    type: 'mystic',
    peopleMinMax: [4, 7],
  },
  {
    id: 'fe3fd970-8708-4f7b-8ea3-be904c390cb7',
    title: 'Фатальный эксперимент',
    previewImg:
      'https://grading.design.htmlacademy.pro/static/quest/experiment.jpg',
    previewImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/experiment.webp',
    level: 'hard',
    type: 'adventures',
    peopleMinMax: [5, 8],
  },
  {
    id: 'f9daffbf-e1b0-4471-adf2-a9b6be694575',
    title: 'Метро 2033',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/metro.jpg',
    previewImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/metro.webp',
    level: 'medium',
    type: 'sci-fi',
    peopleMinMax: [6, 8],
  },
  {
    id: '358c8578-b157-428f-a58e-c116f59a7903',
    title: 'Старый чердак',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/loft.jpg',
    previewImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/loft.webp',
    level: 'easy',
    type: 'detective',
    peopleMinMax: [2, 3],
  },
  {
    id: '190a0ad5-c2c6-4ef1-9507-98cac35c4197',
    title: 'Марс-2056',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/mars.jpg',
    previewImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/mars.webp',
    level: 'easy',
    type: 'sci-fi',
    peopleMinMax: [2, 5],
  },
  {
    id: '04b72c49-cf1d-43ec-b5d4-1b0fa0778198',
    title: 'Последний рубеж',
    previewImg:
      'https://grading.design.htmlacademy.pro/static/quest/frontier.jpg',
    previewImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/frontier.webp',
    level: 'medium',
    type: 'adventures',
    peopleMinMax: [4, 7],
  },
  {
    id: '1512f70b-5560-468f-99cc-e71f11dd8261',
    title: 'История призраков',
    previewImg:
      'https://grading.design.htmlacademy.pro/static/quest/ghosts.jpg',
    previewImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/ghosts.webp',
    level: 'easy',
    type: 'mystic',
    peopleMinMax: [5, 6],
  },
];

const questMains: QuestMain[] = [
  {
    id: '0a6b665c-7191-4e09-96a5-b091f45f108f',
    title: 'Склеп',
    description:
      'Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/crypt.jpg',
    previewImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/crypt.webp',
    coverImg:
      'https://grading.design.htmlacademy.pro/static/quest/crypt@2x.jpg',
    coverImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/crypt@2x.webp',
    level: 'hard',
    type: 'horror',
    peopleMinMax: [2, 5],
  },
  {
    id: 'e624381d-8eec-4b12-b145-3e11e22bd877',
    title: 'Маньяк',
    description:
      'В комнате с приглушённым светом несколько человек, незнакомых друг с другом, приходят в себя. Никто не помнит, что произошло прошлым вечером. Руки и ноги связаны, но одному из вас получилось освободиться. На стене висит пугающий таймер и запущен отсчёт 60 минут. Сможете ли вы разобраться в стрессовой ситуации, помочь другим, разобраться что произошло и выбраться из комнаты?',
    previewImg:
      'https://grading.design.htmlacademy.pro/static/quest/maniac.jpg',
    previewImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/maniac.webp',
    coverImg:
      'https://grading.design.htmlacademy.pro/static/quest/maniac@2x.jpg',
    coverImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/maniac@2x.webp',
    level: 'medium',
    type: 'horror',
    peopleMinMax: [3, 6],
  },
  {
    id: 'a8d04b9d-24a3-45b0-ab02-739fbb60c682',
    title: 'Ритуал',
    description:
      'Тяжелый воздух угнетает, в ночи вы оказываетесь запертыми в сыром помещении вместе с другими ничего не понимающими жертвами. Сквозь щель в двери вы видите, как некто в капюшоне готовит площадку как будто для проведения мистического обряда. Удастся ли вам выбраться, пока вы не станете жертвой ритуала?',
    previewImg:
      'https://grading.design.htmlacademy.pro/static/quest/ritual.jpg',
    previewImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/ritual.webp',
    coverImg:
      'https://grading.design.htmlacademy.pro/static/quest/ritual@2x.jpg',
    coverImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/ritual@2x.webp',
    level: 'hard',
    type: 'mystic',
    peopleMinMax: [3, 5],
  },
  {
    id: '41ec1121-8771-47c3-b2d2-891c7806b7dc',
    title: 'Тайны старого особняка',
    description:
      'Погрузитесь в атмосферу служебных помещений закулисья, которые хранят множество тайн и загадок. Вы окажитесь в старом особняке и увидите все, что скрывают его запутанные коридоры.',
    previewImg:
      'https://grading.design.htmlacademy.pro/static/quest/palace.jpg',
    previewImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/palace.webp',
    coverImg:
      'https://grading.design.htmlacademy.pro/static/quest/palace@2x.jpg',
    coverImgWebp:
      'https://grading.design.htmlacademy.pro/static/quest/palace@2x.webp',
    level: 'easy',
    type: 'detective',
    peopleMinMax: [2, 5],
  },
];

const places = [
  {
    id: '996c0e93-cd93-4df5-b1a8-cc551a880a72',
    location: {
      address: 'Полюстровский парк, м. Ладожская',
      coords: [59.96536433646851, 30.424032915448624],
    },
    slots: {
      today: [
        {
          time: '14:00',
          isAvailable: true,
        },
        {
          time: '15:00',
          isAvailable: true,
        },
        {
          time: '16:00',
          isAvailable: true,
        },
        {
          time: '17:00',
          isAvailable: false,
        },
        {
          time: '18:00',
          isAvailable: false,
        },
        {
          time: '19:00',
          isAvailable: true,
        },
        {
          time: '20:00',
          isAvailable: false,
        },
      ],
      tomorrow: [
        {
          time: '14:00',
          isAvailable: true,
        },
        {
          time: '15:00',
          isAvailable: true,
        },
        {
          time: '16:00',
          isAvailable: true,
        },
        {
          time: '17:00',
          isAvailable: true,
        },
        {
          time: '18:00',
          isAvailable: false,
        },
        {
          time: '19:00',
          isAvailable: false,
        },
        {
          time: '20:00',
          isAvailable: false,
        },
      ],
    },
  },
];

const userBookings: UserBookings = [
  {
    date: 'today',
    time: '14:00',
    contactPerson: 'Oliver',
    phone: '899911122233',
    withChildren: true,
    peopleCount: 6,
    id: '0c5fa01d-e89c-478d-9b85-799cf4abe29f',
    location: {
      address: 'Набережная реки Карповки, 5П',
      coords: [30.317359, 30.317359],
    },
    quest: {
      id: '0a6b665c-7191-4e09-96a5-b091f45f108f',
      title: 'Склеп',
      previewImg:
        'https://grading.design.htmlacademy.pro/static/quest/crypt.jpg',
      previewImgWebp:
        'https://grading.design.htmlacademy.pro/static/quest/crypt.webp',
      level: 'medium',
      type: 'adventures',
      peopleMinMax: [2, 5],
    },
  },
  {
    date: 'tomorrow',
    time: '17:00',
    contactPerson: 'Oliver',
    phone: '899911122233',
    withChildren: true,
    peopleCount: 3,
    id: '0c5fa01d-e89c-478d-9e85-799b8bef',
    location: {
      address: 'Набережная реки Карповки, 5П',
      coords: [30.317359, 30.317359],
    },
    quest: {
      id: '41ec1121-8771-47c3-b2d2-891c7806b7dc',
      title: 'Тайны старого особняка',
      previewImg:
        'https://grading.design.htmlacademy.pro/static/quest/palace.jpg',
      previewImgWebp:
        'https://grading.design.htmlacademy.pro/static/quest/palace.webp',
      level: 'easy',
      type: 'adventures',
      peopleMinMax: [2, 5],
    },
  },
];

export { quests, questMains, places, userBookings };
