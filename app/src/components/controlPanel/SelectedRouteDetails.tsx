import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight, Clock, MapPin, Info } from 'lucide-react';
import { PersonStanding } from 'lucide-react';
import { useState } from 'react';

interface RouteData {
  id: number;
  duration: string;
  startTime: string;
  endTime: string;
  walkDistance: string;
  walkDuration: string;
  steps: {
    time: string;
    type: 'start' | 'walk' | 'tram' | 'bus' | 's-bahn' | 'transfer' | 'end';
    line?: string;
    from?: string;
    to?: string;
    duration?: string;
    distance?: string;
    platform?: string;
    direction?: string;
    stops?: number;
    stopDuration?: string;
    transferDuration?: string;
  }[];
}

const routes: RouteData[] = [
  {
    id: 1,
    duration: "28 min",
    startTime: "13:05",
    endTime: "13:33",
    walkDistance: "400 m",
    walkDuration: "6 min",
    steps: [
      { time: "13:05", type: "start", from: "Leipzig Hauptbahnhof", to: "Willy-Brandt-Platz" },
      { time: "13:07", type: "tram", line: "4", direction: "toStotteritz", platform: "2", stops: 5, stopDuration: "12" },
      { time: "13:19", type: "transfer", from: "Markt", transferDuration: "4" },
      { time: "13:23", type: "tram", line: "15", direction: "toMeusdorf", platform: "1", stops: 2, stopDuration: "8" },
      { time: "13:33", type: "end", from: "Universität Leipzig", to: "Augustusplatz" }
    ]
  },
  {
    id: 2,
    duration: "25 min",
    startTime: "13:10",
    endTime: "13:35",
    walkDistance: "300 m",
    walkDuration: "5 min",
    steps: [
      { time: "13:10", type: "start", from: "hauptbahnhof", to: "centralStation" },
      { time: "13:15", type: "s-bahn", line: "S3", direction: "toHalle", platform: "underground", stops: 1, stopDuration: "4" },
      { time: "13:19", type: "transfer", from: "wilhelm", transferDuration: "3" },
      { time: "13:22", type: "tram", line: "11", direction: "toSchonefeld", platform: "3", stops: 3, stopDuration: "10" },
      { time: "13:35", type: "end", from: "university", to: "augustusplatz" }
    ]
  },
  {
    id: 3,
    duration: "38 min",
    startTime: "13:08",
    endTime: "13:46",
    walkDistance: "500 m",
    walkDuration: "7 min",
    steps: [
      { time: "13:08", type: "start", from: "Leipzig Hauptbahnhof", to: "Willy-Brandt-Platz" },
      { time: "13:12", type: "bus", line: "89", direction: "toConnewitz", platform: "Stop B", stops: 4, stopDuration: "15 min" },
      { time: "13:27", type: "transfer", from: "Wilhelm-Leuschner-Platz", transferDuration: "3 min" },
      { time: "13:30", type: "tram", line: "4", direction: "toStotteritz", platform: "Platform 1", stops: 3, stopDuration: "12 min" },
      { time: "13:46", type: "end", from: "Leipzig Universität", to: "Augustusplatz" }
    ]
  }
];

const SelectedRouteDetails = () => {
  const t = useTranslations('ControlPanel.routeDetails');
  const [currentRouteIndex, setCurrentRouteIndex] = useState(0);
  const currentRoute = routes[currentRouteIndex];

  const handlePrevRoute = () => {
    setCurrentRouteIndex((prev) => (prev > 0 ? prev - 1 : routes.length - 1));
  };

  const handleNextRoute = () => {
    setCurrentRouteIndex((prev) => (prev < routes.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex flex-col h-screen w-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <button 
          className="p-2 hover:bg-gray-100 rounded-full"
          onClick={handlePrevRoute}
        >
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-xl font-bold">{t('itinerary')} ({currentRouteIndex + 1}/{routes.length})</h2>
        <button 
          className="p-2 hover:bg-gray-100 rounded-full"
          onClick={handleNextRoute}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Journey Overview */}
      <div className="flex justify-between items-center p-4 border-b bg-gray-50">
        <div className="flex items-center gap-3">
          <Clock size={20} className="text-gray-700" />
          <div>
            <div className="font-medium text-lg">{currentRoute.duration}</div>
            <div className="text-sm text-gray-600">{currentRoute.startTime} - {currentRoute.endTime}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <PersonStanding size={20} className="text-gray-700" />
          <div>
            <div className="font-medium">{currentRoute.walkDistance}</div>
            <div className="text-sm text-gray-600">{currentRoute.walkDuration}</div>
          </div>
        </div>
      </div>

      {/* Required Ticket */}
      <div className="flex justify-between items-center px-6 py-3 border-b bg-blue-50">
        <div className="text-gray-700">{t('requiredTicket')}</div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-blue-800">Leipzig AB</span>
          <ChevronRight size={20} className="text-blue-800" />
        </div>
      </div>

      {/* Detailed Steps */}
      <div className="flex-1 overflow-auto">
        <div className="relative">
          {/* Start Point */}
          <div className="flex items-start gap-4 p-4 border-b">
            <div className="flex flex-col items-center">
              <div className="text-green-600 font-medium text-lg">13:05</div>
              <div className="w-0.5 h-full bg-gray-300 absolute top-10"></div>
            </div>
            <div className="flex-1">
              <div className="font-medium text-lg">Leipzig Hauptbahnhof</div>
              <div className="text-sm text-gray-600">Willy-Brandt-Platz</div>
              <button className="mt-1">
                <MapPin size={16} className="text-blue-500" />
              </button>
            </div>
          </div>

          {/* Walking Step */}
          {currentRoute.steps.map((step, index) => {
            if (step.type === "walk") {
              return (
                <div key={index} className="flex items-start gap-4 p-4 border-b bg-gray-50">
                  <div className="flex flex-col items-center relative">
                    <PersonStanding size={20} className="text-gray-600" />
                    <div className="w-0.5 h-full bg-gray-300 absolute top-8"></div>
                  </div>
                  <div>
                    <div className="text-gray-600">
                      {t('walkTime', { duration: step.duration })} ({t('walkDistance', { distance: step.distance })})
                    </div>
                  </div>
                </div>
              );
            }

            if (step.type === "tram" || step.type === "s-bahn" || step.type === "bus") {
              return (
                <div key={index} className="flex items-start gap-4 p-4 border-b">
                  <div className="flex flex-col items-center">
                    <div className="text-green-600 font-medium text-lg">{step.time}</div>
                    <div className="w-0.5 h-full bg-gray-300 absolute"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`text-white px-3 py-1 rounded-md font-medium ${
                        step.type === 'tram' ? 'bg-red-600' :
                        step.type === 'bus' ? 'bg-purple-600' :
                        'bg-green-600'
                      }`}>
                        {step.line}
                      </div>
                      <span>{t(`directions.${step.direction}`)}</span>
                    </div>
                    <div className="flex items-center text-gray-600 gap-1 mb-2">
                      <Info size={16} />
                      <span>
                        {step.platform === "underground" 
                          ? t('underground')
                          : t('platform', { number: step.platform })}
                      </span>
                    </div>
                    <button className="text-blue-500 text-sm hover:underline">
                      {t('stops', { count: step.stops })} ({t('duration', { duration: step.stopDuration })})
                    </button>
                  </div>
                </div>
              );
            }

            // ... similar updates for other step types
          })}

          {/* Transfer Point */}
          <div className="flex items-start gap-4 p-4 border-b bg-yellow-50">
            <div className="flex flex-col items-center">
              <div className="text-orange-600 font-medium text-lg">13:27</div>
              <div className="w-0.5 h-full bg-gray-300 absolute"></div>
            </div>
            <div className="flex-1">
              <div className="font-medium">Wilhelm-Leuschner-Platz</div>
              <div className="text-sm text-orange-600 font-medium">4 min transfer</div>
            </div>
          </div>

          {/* S-Bahn Step */}
          <div className="flex items-start gap-4 p-4 border-b">
            <div className="flex flex-col items-center">
              <div className="text-green-600 font-medium text-lg">13:31</div>
              <div className="w-0.5 h-full bg-gray-300 absolute"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-green-600 text-white px-3 py-1 rounded-md font-medium">
                  S3
                </div>
                <span>→ Halle (Saale)</span>
              </div>
              <div className="flex items-center text-gray-600 gap-1 mb-2">
                <Info size={16} />
                <span>Underground platform</span>
              </div>
              <button className="text-blue-500 text-sm hover:underline">4 stops (12 min)</button>
            </div>
          </div>

          {/* End Point */}
          <div className="flex items-start gap-4 p-4">
            <div className="flex flex-col items-center">
              <div className="text-red-600 font-medium text-lg">13:47</div>
            </div>
            <div className="flex-1">
              <div className="font-medium text-lg">Leipzig Universität</div>
              <div className="text-sm text-gray-600">Augustusplatz</div>
              <button className="mt-1">
                <MapPin size={16} className="text-blue-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedRouteDetails;
  