import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronLeft, Star, AlertTriangle, Clock, Info } from 'lucide-react';

interface Departure {
  line: string;
  type: 'tram' | 'bus' | 's-bahn';
  destination: string;
  time: string;
  platform: string;
  minutes: number;
}

interface Disruption {
  type: 'delay' | 'cancellation' | 'construction';
  lines: string[];
  message: string;
  until: string;
}

const StationDetails = () => {
  const t = useTranslations('ControlPanel.station');
  const [activeTab, setActiveTab] = useState<'now' | 'timetable' | 'disruptions'>('now');

  const departures: Departure[] = [
    { line: "11", type: 'tram', destination: "Schkeuditz", time: "20:52", platform: "2", minutes: 4 },
    { line: "S3", type: 's-bahn', destination: "Halle (Saale)", time: "21:01", platform: "1", minutes: 13 },
    { line: "15", type: 'tram', destination: "Meusdorf", time: "21:17", platform: "3", minutes: 29 },
    { line: "60", type: 'bus', destination: "Lindenau", time: "21:20", platform: "B", minutes: 32 },
    { line: "S1", type: 's-bahn', destination: "Miltitzer Allee", time: "21:21", platform: "2", minutes: 33 },
  ];

  const disruptions: Disruption[] = [
    {
      type: 'construction',
      lines: ['11', '15'],
      message: "Bauarbeiten zwischen Wilhelm-Leuschner-Platz und Augustusplatz. Bitte planen Sie mehr Zeit ein.",
      until: "15.04.2024"
    },
    {
      type: 'delay',
      lines: ['S3'],
      message: "Verzögerungen wegen technischer Störung am Hauptbahnhof.",
      until: "Heute"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b bg-[#1a365d] text-white">
        <button className="p-2 hover:bg-[#2d4a7c] rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button>
        <div className="flex-1">
          <h2 className="text-xl font-bold">Leipzig Hauptbahnhof</h2>
          <p className="text-sm text-white/80">Willy-Brandt-Platz</p>
        </div>
        <button className="p-2 hover:bg-[#2d4a7c] rounded-full transition-colors">
          <Star size={24} />
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b">
        {(['now', 'timetable', 'disruptions'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-4 py-3 transition-colors ${
              activeTab === tab 
                ? 'text-[#1a365d] font-medium border-b-2 border-[#1a365d]'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {t(tab === 'now' ? 'rightNow' : tab)}
          </button>
        ))}
      </div>

      {/* Content based on active tab */}
      {(activeTab === 'now' || activeTab === 'timetable') && (
        <div className="flex flex-col">
          {/* Column Headers */}
          <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-gray-50 text-sm text-gray-600">
            <div className="col-span-2">{t('columns.route')}</div>
            <div className="col-span-6">{t('columns.destination')}</div>
            <div className="col-span-2 text-right">{t('columns.leavingAt')}</div>
            <div className="col-span-2 text-right">{t('columns.platform')}</div>
          </div>

          {/* Departures */}
          {departures.map((departure, index) => (
            <div 
              key={index}
              className="grid grid-cols-12 gap-2 px-4 py-3 border-b hover:bg-[#fef9c3]/10 items-center"
            >
              <div className="col-span-2">
                <div className={`inline-flex px-3 py-1 rounded-md font-medium text-white ${
                  departure.type === 'tram' ? 'bg-red-600' :
                  departure.type === 'bus' ? 'bg-purple-600' :
                  'bg-green-600'
                }`}>
                  {departure.line}
                </div>
              </div>
              <div className="col-span-6 font-medium text-gray-900">
                {departure.destination}
              </div>
              <div className="col-span-2 text-right">
                <div className="font-medium text-gray-900">{departure.time}</div>
                {activeTab === 'now' && (
                  <div className="text-sm text-green-600">
                    {t('minutes', { count: departure.minutes })}
                  </div>
                )}
              </div>
              <div className="col-span-2 text-right font-medium">
                {departure.platform}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Disruptions Tab Content */}
      {activeTab === 'disruptions' && (
        <div className="p-4 space-y-4">
          {disruptions.length === 0 ? (
            <p className="text-center text-gray-600 py-8">{t('noDisruptions')}</p>
          ) : (
            disruptions.map((disruption, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="bg-[#1a365d] text-white px-4 py-2 flex items-center gap-2">
                  <AlertTriangle size={18} />
                  <span className="font-medium">
                    {t(`disruption.type.${disruption.type}`)}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    {disruption.lines.map(line => (
                      <span key={line} className="px-2 py-1 bg-gray-100 rounded text-sm font-medium">
                        {line}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700">{disruption.message}</p>
                  <p className="text-sm text-gray-500 mt-2">Bis: {disruption.until}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default StationDetails;
  