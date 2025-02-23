import { generateStaticParams } from "../generateStaticParams";
export { generateStaticParams };

import Map from '@/components/Map';
import { UIProvider } from '@/contexts/uiContext';
import { SettingsProvider } from '@/contexts/settingsContext';
import { MapProvider } from '@/contexts/mapContext';


export default function Home() {
  return (
    <div>
        <Map />
    </div>
  );
}