import { AllowedDate } from '../../const';
import { DayPlaceBooking } from '../../types/user-booking';
import { PageValues } from '../../types/page';
import { Quest } from '../../types/quest';
import { QuestTags } from '../quest-tags/quest-tags';
import { Cancel } from './components/cencel/cencel';

type CardProps = {
  quest: Quest;
  page: PageValues;
  dayPlaceBooking?: DayPlaceBooking;
};

function Card({ quest, page, dayPlaceBooking }: CardProps): JSX.Element {
  const { id, title, previewImg, previewImgWebp, level, type, peopleMinMax } =
    quest;
  const day = dayPlaceBooking ? AllowedDate[dayPlaceBooking.date].text : '';
  const time = dayPlaceBooking?.time ?? '';
  const address = dayPlaceBooking?.location.address ?? '';

  return (
    <div className="quest-card">
      <span className="visually-hidden">{id}</span>
      <span className="visually-hidden">{type}</span>
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={previewImgWebp} />
          <img
            src={previewImg}
            // srcSet="img/content/crypt/crypt-size-s@2x.jpg 2x"
            width={344}
            height={232}
            alt={title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <a className="quest-card__link" href="quest.html">
            {title}
          </a>
          {dayPlaceBooking && (
            <span className="quest-card__info">
              [{day},&nbsp;{time}. {address}]
            </span>
          )}
        </div>
        <QuestTags
          peopleMinMax={peopleMinMax}
          level={level}
          page={page}
          peopleCount={dayPlaceBooking?.peopleCount}
        />
        {dayPlaceBooking && <Cancel />}
      </div>
    </div>
  );
}

export { Card };
