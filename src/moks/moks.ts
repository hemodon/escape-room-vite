import { Quests } from '../types/quest';

const quests: Quests = [
  {
    id: '111',
    title: 'Склеп',
    previewImg: 'img/content/crypt/crypt-size-s.jpg',
    previewImgWebp: 'img/content/crypt/crypt-size-s.webp',
    level: 'easy',
    type: 'adventure',
    peopleMinMax: [2, 5],
  },
  {
    id: '222',
    title: 'Маньяк',
    previewImg: 'img/content/maniac/maniac-size-s',
    previewImgWebp: 'img/content/maniac/maniac-size-s@2x.webp',
    level: 'middle',
    type: 'horror',
    peopleMinMax: [3, 6],
  },
  {
    id: '333',
    title: 'Ритуал',
    previewImg: 'img/content/ritual/ritual-size-s.jpg',
    previewImgWebp: 'img/content/ritual/ritual-size-s@2x.jpg 2x',
    level: 'easy',
    type: 'adventure',
    peopleMinMax: [3, 5],
  },
  {
    id: '444',
    title: 'История призраков',
    previewImg: 'img/content/ghosts/ghosts-size-s.jpg',
    previewImgWebp: 'img/content/ghosts/ghosts-size-s@2x.jpg 2x',
    level: 'easy',
    type: 'adventure',
    peopleMinMax: [5, 6],
  },
  {
    id: '555',
    title: 'Тайны старого особняка',
    previewImg: 'img/content/palace/palace-size-s.jpg',
    previewImgWebp: 'img/content/palace/palace-size-s@2x.jpg 2x',
    level: 'easy',
    type: 'horror',
    peopleMinMax: [2, 3],
  },
];

export { quests };
