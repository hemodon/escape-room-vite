import { Page } from '../../const';
import { PageValues } from '../../types/page';
import { hasSome } from '../../utils';

type DecorProps = {
  previewImg: string;
  coverImg: string;
  previewImgWebp: string;
  coverImgWebp: string;
  page: PageValues;
};

function Decor(props: DecorProps): JSX.Element {
  const { previewImg, coverImg, previewImgWebp, coverImgWebp, page } = props;
  const isHigh = hasSome(page, Page.Booking, Page.MyQuests, Page.Contacts);

  return (
    <div className="decorated-page__decor" aria-hidden="true">
      <picture>
        <source
          type="image/webp"
          srcSet={`${previewImgWebp}, ${coverImgWebp} 2x`}
        />
        <img
          src={previewImg}
          srcSet={`${coverImg} 2x`}
          width={1366}
          height={isHigh ? 1959 : 768}
          alt="title"
        />
      </picture>
    </div>
  );
}

export { Decor };
