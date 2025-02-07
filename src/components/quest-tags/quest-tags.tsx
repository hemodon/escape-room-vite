import cn from 'classnames';
import { Level, PeopleMinMax } from '../../types/quest';
import { PageValues } from '../../types/page';
import { FilterValues, Page } from '../../const';

type QuestTagsProps = {
  peopleMinMax: PeopleMinMax;
  level: Level;
  page: PageValues;
};

function QuestTags({ peopleMinMax, level, page }: QuestTagsProps): JSX.Element {
  const className = cn('tags', {
    ['quest-card__tags']: page === Page.Main || page === Page.Favorites,
    ['tags--size-l quest-page__tags']: page === Page.Quest,
  });
  const levelQuest = FilterValues.level[level].text;

  return (
    <ul className={className}>
      <li className="tags__item">
        <svg width={11} height={14} aria-hidden="true">
          <use xlinkHref="#icon-person" />
        </svg>
        {peopleMinMax[0]}–{peopleMinMax[1]}&nbsp;чел
      </li>
      <li className="tags__item">
        <svg width={14} height={14} aria-hidden="true">
          <use xlinkHref="#icon-level" />
        </svg>
        {levelQuest}
      </li>
    </ul>
  );
}

export { QuestTags };
