import {AbstractIntlMessages, useTranslations} from 'next-intl';
import { getMessages } from 'next-intl/server';
import Image from 'next/image';


export async function generateMetadata({
  params: {locale},
}: {
  params: {locale: string};
}) {
  const messages = await getMessages({locale}) as {Metadata: {title: string}};
  const title = messages.Metadata.title;
  return {
    title,
  };
}

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <main className='flex flex-col gap-8 items-center'>
      <Image 
         className="dark:invert"
         src="/next.svg"
         alt="Next.js Logo"
         width={180}
         height={37}
         priority
      />

      <ol className='list-inside list-decimal text-sm text-center sm:text-left font-[family:var(--font-mono)]'> 
        <li className='mb-2'>
          {t('list1')}
          <code className='bg-black/[0.5] dark:bg-white/[0.6] px-2 py-1 rounded font-bold'></code>
        </li>

        <li className='mb-2'>
          {t('list2')}
          <code className='bg-black/[0.5] dark:bg-white/[0.6] px-2 py-1 rounded font-bold'></code>
        </li>
      </ol>
     

    </main>
  );
}