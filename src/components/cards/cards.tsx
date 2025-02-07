import { Quests } from '../../types/quest';
import { Card } from '../card/card';

type CardsProps = {
  quests: Quests;
};

function Cards({ quests }: CardsProps): JSX.Element {
  return (
    <div className="cards-grid">
      {quests.map((quest) => (
        <Card key={quest.id} quest={quest} />
      ))}
    </div>
  );
}

export { Cards };
