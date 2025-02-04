import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight, Clock, MapPin, Info } from 'lucide-react';
import PersonStanding from '../../../public/Walk.svg';
import Image from 'next/image';
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

const getTransportColor = (type: string) => {
  switch (type) {
    case 'tram':
      return 'bg-red-600';
    case 's-bahn':
      return 'bg-green-600';
    case 'bus':
      return 'bg-purple-600';
    case 'walk':
      return 'bg-gray-200';
    default:
      return 'bg-gray-400';
  }
};

const getLineColor = (type: string) => {
  switch (type) {
    case 'tram':
      return 'border-red-600';
    case 's-bahn':
      return 'border-green-600';
    case 'bus':
      return 'border-purple-600';
    default:
      return 'border-gray-200';
  }
};

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
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-[#1a365d] text-white">
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
          <Image 
            src={PersonStanding}
            alt="Walking"
            width={20}
            height={20}
            className="text-gray-700"
          />
          <div>
            <div className="font-medium">{currentRoute.walkDistance}</div>
            <div className="text-sm text-gray-600">{currentRoute.walkDuration}</div>
          </div>
        </div>
      </div>

      {/* Required Ticket */}
      <div className="flex justify-between items-center px-6 py-3 border-b bg-[#fef9c3]/30">
        <div className="text-gray-700">{t('requiredTicket')}</div>
      </div>

      {/* Detailed Steps - Updated Design */}
      <div className="flex-1">
        <div className="relative p-4">
          {currentRoute.steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              {/* Time Column */}
              <div className="w-16 flex flex-col items-center">
                <span className="font-medium text-gray-900">{step.time}</span>
                {index < currentRoute.steps.length - 1 && (
                  <div className={`h-full border-l-4 my-2 transition-all ${
                    step.type !== 'start' ? getLineColor(step.type) : 'border-gray-200'
                  } ${
                    step.type !== 'walk' && step.type !== 'start' ? 'scale-y-110' : ''
                  }`} />
                )}
              </div>

              {/* Content Column */}
              <div className="flex-1 pb-8">
                {/* Transport Badge and Info */}
                {step.type !== 'start' && step.type !== 'end' && (
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm ${getTransportColor(step.type)} ${
                      step.type !== 'walk' ? 'scale-105 shadow-md' : ''
                    }`}>
                      {step.type === 'walk' ? (
                        <>
                          <Image 
                            src={PersonStanding}
                            alt="Walking"
                            width={18}
                            height={18}
                            className="text-gray-700"
                          />
                          <span className="text-gray-700 font-medium">
                            {t('walkTime', { duration: step.duration })}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-white font-medium">{step.line}</span>
                          <span className="text-white/90">
                            {step.direction ? t(`directions.${step.direction}`) : ''}
                          </span>
                        </>
                      )}
                    </div>
                    
                    {(step.type === 'tram' || step.type === 's-bahn' || step.type === 'bus') && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Info size={16} />
                        <span>
                          {step.platform === "underground" 
                            ? t('underground')
                            : t('platform', { number: step.platform })}
                        </span>
                        •
                        <span>{t('stops', { count: step.stops })} ({t('duration', { duration: step.stopDuration })})</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Location Name with Dot */}
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${
                    step.type === 'start' ? 'bg-green-500' :
                    step.type === 'end' ? 'bg-red-500' :
                    step.type === 'walk' ? 'bg-gray-400' :
                    getTransportColor(step.type)
                  } ${
                    step.type !== 'walk' && step.type !== 'start' && step.type !== 'end' 
                      ? 'ring-2 ring-offset-2 ring-opacity-50' : ''
                  }`} />
                  <div>
                    <div className="font-medium text-gray-900">{step.from}</div>
                    {step.to && (
                      <div className="text-sm text-gray-600">{step.to}</div>
                    )}
                  </div>
                </div>

                {/* Transfer Info */}
                {step.type === 'transfer' && (
                  <div className="mt-2 text-sm font-medium text-orange-600">
                    {t('transfer', { duration: step.transferDuration })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedRouteDetails;
  