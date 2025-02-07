import { LevelsFilterKeys, TypesFilterKeys } from './filter';

type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Exclude<LevelsFilterKeys, 'any'>;
  type: Exclude<TypesFilterKeys, 'all'>;
  peopleMinMax: [number, number];
};

type Quests = Quest[];

export type { Quest, Quests };
