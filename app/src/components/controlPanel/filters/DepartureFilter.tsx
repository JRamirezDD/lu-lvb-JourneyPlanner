import { useState, useEffect } from "react";
import { useSettingsContext } from "@/contexts/settingsContext"; // Import context
import { Clock, Calendar } from "lucide-react"; // Import icons

interface DepartureFilterProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
}

const DepartureFilter = ({ selectedDate, setSelectedDate }: DepartureFilterProps) => {
  const { translations } = useSettingsContext(); // Get translations from context
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const setToNow = () => {
    setSelectedDate(new Date());
  };

  if (!isMounted) {
    return null; // Prevents hydration issues
  }

  return (
    <div className="p-4 border rounded bg-white shadow-sm">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-primary-blue">
            {translations?.ControlPanel?.planner?.filters?.datePicker?.title || "Departure Time"}
          </h3>
          <button
            onClick={setToNow}
            className="bg-primary-yellow text-primary-blue px-4 py-2 rounded-md hover:bg-primary-yellow/80 transition-colors text-sm font-medium flex items-center gap-2"
          >
            <Clock size={16} />
            {translations?.ControlPanel?.planner?.filters?.datePicker?.setToNow || "Set to Now"}
          </button>
        </div>

        {/* Date and Time in a better layout */}
        <div className="grid grid-cols-2 gap-4">
          {/* Date Picker */}
          <div className="relative">
            <label className="block text-sm font-medium text-primary-blue mb-2 flex items-center gap-1">
              <Calendar size={16} />
              {translations?.ControlPanel?.planner?.filters?.datePicker?.date || "Date"}
            </label>
            <input
              type="date"
              value={selectedDate ? selectedDate.toISOString().split("T")[0] : ""}
              onChange={(e) => {
                const newDate = new Date(selectedDate || new Date());
                const [year, month, day] = e.target.value.split("-").map(Number);
                newDate.setFullYear(year, month - 1, day);
                setSelectedDate(newDate);
              }}
              className="w-full p-2 border border-gray-300 rounded focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
            />
          </div>

          {/* Time Picker */}
          <div className="relative">
            <label className="block text-sm font-medium text-primary-blue mb-2 flex items-center gap-1">
              <Clock size={16} />
              {translations?.ControlPanel?.planner?.filters?.datePicker?.time || "Time"}
            </label>
            <input
              type="time"
              value={selectedDate ? selectedDate.toTimeString().slice(0, 5) : ""}
              onChange={(e) => {
                const [hours, minutes] = e.target.value.split(":");
                const newDate = new Date(selectedDate || new Date());
                newDate.setHours(parseInt(hours), parseInt(minutes));
                setSelectedDate(newDate);
              }}
              className="w-full p-2 border border-gray-300 rounded focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none"
            />
          </div>
        </div>
        
        {/* Display selected date and time in a user-friendly format */}
        {selectedDate && (
          <div className="mt-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
            <p>
              {translations?.ControlPanel?.planner?.filters?.datePicker?.selected || "Selected"}: 
              <span className="font-medium ml-1">
                {selectedDate.toLocaleDateString(undefined, { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="font-medium ml-1">
                {selectedDate.toLocaleTimeString(undefined, { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepartureFilter;
