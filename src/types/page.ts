import { Page } from '../const';

type PageKeys = keyof typeof Page;

type PageValues = (typeof Page)[PageKeys];

export type { PageKeys, PageValues };
