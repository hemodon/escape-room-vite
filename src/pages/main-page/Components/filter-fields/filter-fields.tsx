import {
  LevelsFilter,
  LevelsFilterKeys,
  TypesFilter,
  TypesFilterKeys,
} from '../../../../types/filter';
import { FilterItem } from '../filter-item/filter-item';

type FilterFieldsProps = {
  title: string;
  field: TypesFilter | LevelsFilter;
};

function FilterFields({ field, title }: FilterFieldsProps) {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">{title}</legend>
      <ul className="filter__list">
        {Object.entries(field).map(([id, value]) => (
          <FilterItem
            key={id}
            id={id as TypesFilterKeys | LevelsFilterKeys}
            value={value}
          />
        ))}
      </ul>
    </fieldset>
  );
}

export { FilterFields };
