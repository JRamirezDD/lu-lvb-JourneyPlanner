import { getMessages } from 'next-intl/server';
import ControlPanel from '@/components/controlPanel/ControlPanel';

type MetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: MetadataProps) {
  const { locale } = await props.params;
  const messages = await getMessages({ locale }) as { Metadata: { title: string } };
  const title = messages.Metadata.title;
  return {
    title,
  };
}

export default function HomePage() {
  return (
    <main className='flex h-screen'>
      <ControlPanel />
    </main>
  );
}
