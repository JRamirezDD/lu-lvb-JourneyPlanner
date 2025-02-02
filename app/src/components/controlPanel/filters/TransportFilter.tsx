import Image from 'next/image';
import TramLogo from "../../../../public/Tram-Logo.svg";
import S_BahnLogo from "../../../../public/S-Bahn-Logo.svg";
import BusLogo from "../../../../public/Bus-Logo.svg";

const transportOptions = [
  { type: "Tram", logo: TramLogo },
  { type: "S-Bahn", logo: S_BahnLogo },
  { type: "Bus", logo: BusLogo },
];

interface TransportFilterProps {
  activeFilters: { [key: string]: boolean };
  toggleFilter: (type: string) => void;
}

const TransportFilter = ({ activeFilters, toggleFilter }: TransportFilterProps) => {
  return (
    <div className="p-4 border rounded bg-gray-50">
      <ul className="space-y-3">
        {transportOptions.map(({ type, logo }) => (
          <li key={type} className="flex items-center justify-between border-b pb-2 last:border-none">
            <div className="flex items-center gap-3">
              {logo && (
                <Image 
                  src={logo} 
                  alt={type} 
                  width={32} 
                  height={32}
                />
              )}
              <span className="text-gray-800">{type}</span>
            </div>
            <button
              onClick={() => toggleFilter(type)}
              className={`relative w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
                activeFilters[type] ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                  activeFilters[type] ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransportFilter;
