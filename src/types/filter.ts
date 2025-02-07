import { FilterValues } from '../const';

type IconType = {
  name: string;
  width: string;
  height: string;
};

type FilterItemType = {
  text: string;
  icon: IconType;
};

type TypesFilterKeys = keyof (typeof FilterValues)['type'];

type TypesFilter = {
  [key in TypesFilterKeys]: FilterItemType;
};

type LevelsFilterKeys = keyof (typeof FilterValues)['level'];

type LevelsFilter = {
  [key in LevelsFilterKeys]: Pick<FilterItemType, 'text'>;
};

type FilterValuesType = {
  type: TypesFilter;
  level: LevelsFilter;
};

export type {
  FilterValuesType,
  TypesFilter,
  LevelsFilter,
  TypesFilterKeys,
  LevelsFilterKeys,FilterItemType
};
