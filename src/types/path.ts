import { Path } from '../const';

type PathKeys = keyof typeof Path;

type PathValues = (typeof Path)[PathKeys];

export type { PathKeys, PathValues };
