import {
  FilterItemType,
  LevelsFilterKeys,
  TypesFilterKeys,
} from '../../../../types/filter';

type FilterItemProps = {
  id: TypesFilterKeys | LevelsFilterKeys;
  value: FilterItemType | Pick<FilterItemType, 'text'>;
};

function FilterItem(props: FilterItemProps): JSX.Element {
  const { id, value } = props;
  const isIcon = 'icon' in value;

  return (
    <li className="filter__item">
      <input type="radio" name="type" id={id} />
      <label className="filter__label" htmlFor={id}>
        {isIcon && (
          <svg
            className="filter__icon"
            width={value.icon.width}
            height={value.icon.height}
            aria-hidden="true"
          >
            <use xlinkHref={`#${value.icon.name}`} />
          </svg>
        )}
        <span className="filter__label-text">{value.text}</span>
      </label>
    </li>
  );
}

export { FilterItem };
