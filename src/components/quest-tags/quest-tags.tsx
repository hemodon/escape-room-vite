import cn from 'classnames';
import { Level, PeopleMinMax } from '../../types/quest';
import { PageValues } from '../../types/page';
import { FilterValues, Page } from '../../const';
import { hasSome } from '../../utils';

type QuestTagsProps = {
  peopleMinMax: PeopleMinMax;
  level: Level;
  page: PageValues;
  peopleCount?: number;
};

function QuestTags(props: QuestTagsProps): JSX.Element {
  const { peopleMinMax, level, page, peopleCount } = props;
  const className = cn('tags', {
    ['quest-card__tags']: hasSome(page, Page.Main, Page.MyQuests),
    ['tags--size-l quest-page__tags']: page === Page.Quest,
  });
  const levelQuest = FilterValues.level[level].text;
  const people = peopleCount ?? `${peopleMinMax[0]}–${peopleMinMax[1]}`;

  return (
    <ul className={className}>
      <li className="tags__item">
        <svg width={11} height={14} aria-hidden="true">
          <use xlinkHref="#icon-person" />
        </svg>
        {people}&nbsp;чел
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
