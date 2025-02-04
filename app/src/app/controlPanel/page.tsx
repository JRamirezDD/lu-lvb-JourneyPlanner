import { useTranslations } from 'next-intl';
import { getMessages } from 'next-intl/server';
import ControlPanel from '@/components/controlPanel/ControlPanel';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages = await getMessages({ locale }) as { Metadata: { title: string } };
  const title = messages.Metadata.title;
  return {
    title,
  };
}

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <main className='flex h-screen'>
      {/* Left Side - Control Panel */}
      
        <ControlPanel />
      
    </main>
  );
}
