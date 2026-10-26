import type { Deep } from './types';
import { deepA2a } from './deep-a2a';
import { deepA2b } from './deep-a2b';

export const deepA2: Record<string, Deep> = { ...deepA2a, ...deepA2b };
