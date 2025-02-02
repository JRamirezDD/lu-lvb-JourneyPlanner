import { useTranslations } from 'next-intl';
import RoutePlanner from './RoutePlanner';
import { Clock, PersonStanding } from 'lucide-react';

type ViewState = "planner" | "routes" | "details" | "station";

interface RouteStep {
  type: "Tram" | "Bus" | "S-Bahn" | "Walk";
  line?: string;
  from: string;
  to: string;
  departureTime: string;
  walkDuration?: number;
}

interface Route {
  id: number;
  totalDuration: string;
  departureTime: string;
  arrivalTime: string;
  steps: RouteStep[];
}

const RouteView = ({ setActiveView }: { setActiveView: (view: ViewState) => void }) => {
  const t = useTranslations('ControlPanel.routes');
  
  const routes: Route[] = [
    {
      id: 1,
      totalDuration: "1h 21min",
      departureTime: "14:09",
      arrivalTime: "15:31",
      steps: [
        { type: "Walk", walkDuration: 9, from: "Current Location", to: "Lentoasema", departureTime: "14:09" },
        { type: "Bus", line: "600", from: "Lentoasema", to: "Central", departureTime: "14:19" },
        { type: "Walk", walkDuration: 5, from: "Central", to: "Central Station", departureTime: "14:45" },
        { type: "S-Bahn", line: "M1", from: "Central Station", to: "Destination", departureTime: "14:50" }
      ]
    },
    {
      id: 2,
      totalDuration: "1h 19min",
      departureTime: "14:22",
      arrivalTime: "15:42",
      steps: [
        { type: "Walk", walkDuration: 13, from: "Current Location", to: "Lentoasema", departureTime: "14:22" },
        { type: "Tram", line: "1", from: "Lentoasema", to: "Destination", departureTime: "14:36" }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Route Planner Section */}
      <RoutePlanner setActiveView={setActiveView} />

      {/* Routes List Section */}
      <div className="border-t pt-4">
        <h2 className="text-lg font-bold mb-4">{t('availableRoutes')}</h2>
        <ul className="space-y-3">
          {routes.map((route) => (
            <li 
              key={route.id} 
              className="border border-[#1a365d]/10 rounded-lg hover:bg-[#fef9c3]/20 cursor-pointer transition-colors overflow-hidden"
              onClick={() => setActiveView("details")}
            >
              {/* Time Header */}
              <div className="flex items-center justify-between p-2 bg-[#1a365d]/5">
                <span className="font-medium">{route.departureTime} - {route.arrivalTime}</span>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{route.totalDuration}</span>
                </div>
              </div>

              {/* Route Visualization */}
              <div className="p-3 flex items-center gap-1">
                {route.steps.map((step, index) => (
                  <>
                    {/* Transport Icon/Badge */}
                    {step.type === "Walk" ? (
                      <div className="flex items-center gap-1 text-gray-600 bg-gray-100 px-2 py-1 rounded text-sm">
                        <PersonStanding size={14} />
                        <span>{step.walkDuration}</span>
                      </div>
                    ) : (
                      <div className={`px-3 py-1 rounded font-medium ${
                        step.type === 'Tram' ? 'bg-red-600 text-white' :
                        step.type === 'Bus' ? 'bg-purple-600 text-white' :
                        'bg-green-600 text-white'
                      }`}>
                        {step.line}
                      </div>
                    )}
                    
                    {/* Connector Line */}
                    {index < route.steps.length - 1 && (
                      <div className="h-[2px] w-4 bg-gray-300" />
                    )}
                  </>
                ))}
              </div>

              {/* Departure Info */}
              <div className="px-3 pb-2 text-sm text-gray-600">
                {t('leaves')} {route.steps[0].departureTime} {t('from')} {route.steps[0].from}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RouteView;
  