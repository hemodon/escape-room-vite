import { FilterValues } from '../../../../const';
import { FilterFields } from '../filter-fields/filter-fields';

function FilterForm(): JSX.Element {
  return (
    <form className="filter" action="#" method="get">
      <FilterFields title={'Тематика'} field={FilterValues.type} />
      <FilterFields title={'Сложность'} field={FilterValues.level} />
    </form>
  );
}

export { FilterForm };
