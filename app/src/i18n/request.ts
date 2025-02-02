import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';

const validLocales = ['en', 'de'] as const;
type ValidLocale = typeof validLocales[number];
 
export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('MY_LOCALE')?.value;
  const locale = validLocales.includes(cookieLocale as ValidLocale) ? cookieLocale : 'de';
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});