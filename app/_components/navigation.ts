import {routing} from '@/i18n/routing';
import {createNavigation} from 'next-intl/navigation';

export const locales = ['en', 'es'] as const;
export const localePrefix = 'always'; // Default

export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);
