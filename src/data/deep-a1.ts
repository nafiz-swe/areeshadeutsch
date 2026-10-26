import type { Deep } from './types';
import { deepA1a } from './deep-a1a';
import { deepA1b } from './deep-a1b';

export const deepA1: Record<string, Deep> = { ...deepA1a, ...deepA1b };
