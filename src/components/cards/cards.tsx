import { PageValues } from '../../types/page';
import { Quests } from '../../types/quest';
import { Card } from '../card/card';

type CardsProps = {
  quests: Quests;
  page: PageValues;
};

function Cards({ quests, page }: CardsProps): JSX.Element {
  return (
    <div className="cards-grid">
      {quests.map((quest) => (
        <Card key={quest.id} quest={quest} page={page} />
      ))}
    </div>
  );
}

export { Cards };
