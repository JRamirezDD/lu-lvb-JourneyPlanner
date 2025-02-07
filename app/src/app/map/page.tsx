import Map from '@/components/Map';
import { UIProvider } from '@/contexts/uiContext';
import { SettingsProvider } from '@/contexts/settingsContext';
import { MapProvider } from '@/contexts/mapContext';


export default function Home() {
  return (
    <div>
      {/* content */}
      <UIProvider>
        <SettingsProvider>
          <MapProvider>
            <Map />
          </MapProvider>
        </SettingsProvider>
      </UIProvider>
    </div>
  );
}