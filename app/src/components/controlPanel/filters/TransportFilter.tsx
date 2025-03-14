import Image from "next/image";
import TramLogo from "../../../../public/icons/otp-icons/Tram-Logo.svg";
import S_BahnLogo from "../../../../public/icons/otp-icons/S-Bahn-Logo.svg";
import BusLogo from "../../../../public/icons/otp-icons/Bus-Logo.svg";
import TrainLogo from "../../../../public/icons/otp-icons/Train.svg";
import { useSettingsContext } from "@/contexts/settingsContext";

const transportOptions = [
  { type: "Tram", logo: TramLogo, translationKey: null },
  { type: "S-Bahn", logo: S_BahnLogo, translationKey: null },
  { type: "Bus", logo: BusLogo, translationKey: null },
  { type: "Train", logo: TrainLogo, translationKey: "train" }
];

interface TransportFilterProps {
  activeFilters: { [key: string]: boolean };
  toggleFilter: (type: string) => void;
  lessTransfers?: boolean;
  shortWalk?: boolean;
  onToggleLessTransfers?: () => void;
  onToggleShortWalk?: () => void;
}

const TransportFilter: React.FC<TransportFilterProps> = ({ 
  activeFilters, 
  toggleFilter,
  lessTransfers = false,
  shortWalk = false,
  onToggleLessTransfers,
  onToggleShortWalk
}) => {
  const { translations } = useSettingsContext();

  return (
    <div className="p-4 border rounded bg-gray-50">
      <ul className="space-y-3">
        {transportOptions.map(({ type, logo, translationKey }) => {
          return (
            <li key={type} className="flex items-center justify-between border-b pb-2 last:border-none">
              <div className="flex items-center gap-3">
                <Image src={logo} alt={type} width={32} height={32} />
                <span className="text-gray-800">
                  {translationKey ? translations?.ControlPanel?.planner?.filters?.transport?.[translationKey] || type : type}
                </span>
              </div>
              <button
                onClick={() => toggleFilter(type)}
                className={`relative w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
                  activeFilters[type] ? "bg-[#1a365d]" : "bg-gray-400"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                    activeFilters[type] ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </li>
          );
        })}
        
        {/* Divider */}
        <div className="border-t border-gray-300 my-2"></div>
        
        {/* Less Transfers Option */}
        <li className="flex items-center justify-between border-b pb-2">
          <div className="flex items-center gap-3">
            <span className="text-gray-800">
              {translations?.ControlPanel?.planner?.filters?.lessTransfers || "Less Transfers"}
            </span>
          </div>
          <button
            onClick={onToggleLessTransfers}
            className={`relative w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
              lessTransfers ? "bg-[#1a365d]" : "bg-gray-400"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                lessTransfers ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </li>
        
        {/* Minimal Walking Option */}
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-gray-800">
              {translations?.ControlPanel?.planner?.filters?.minimalWalking || "Minimal Walking"}
            </span>
          </div>
          <button
            onClick={onToggleShortWalk}
            className={`relative w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
              shortWalk ? "bg-[#1a365d]" : "bg-gray-400"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                shortWalk ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TransportFilter;
