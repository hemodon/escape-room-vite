import { DayPlaceBooking } from '../../types/user-booking';
import { PageValues } from '../../types/page';
import { Quests } from '../../types/quest';
import { Card } from '../card/card';

type CardsProps = {
  quests: Quests;
  page: PageValues;
  dayPlaceBookings?: DayPlaceBooking[];
};

function Cards(props: CardsProps): JSX.Element {
  const { quests, page, dayPlaceBookings } = props;

  return (
    <div className="cards-grid">
      {quests.map((quest, index) => (
        <Card
          key={quest.id}
          quest={quest}
          page={page}
          dayPlaceBooking={dayPlaceBookings && dayPlaceBookings[index]}
        />
      ))}
    </div>
  );
}

export { Cards };
