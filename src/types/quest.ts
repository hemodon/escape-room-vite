import { LevelsFilterKeys, TypesFilterKeys } from './filter';

type PeopleMinMax = [number, number];

type Level = Exclude<LevelsFilterKeys, 'any'>;

type QuestMain = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Level;
  type: Exclude<TypesFilterKeys, 'all'>;
  peopleMinMax: PeopleMinMax;
  description: string;
  coverImg: string;
  coverImgWebp: string;
};

type Quest = Omit<QuestMain, 'description' | 'coverImg' | 'coverImgWebp'>;

type Quests = Quest[];

export type { Level, PeopleMinMax, QuestMain, Quest, Quests };
