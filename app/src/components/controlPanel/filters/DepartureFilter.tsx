import { useState, useEffect } from "react";
import { useSettingsContext } from "@/contexts/settingsContext";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";

interface DepartureFilterProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
  isArrival?: boolean;
  setIsArrival?: (isArrival: boolean) => void;
}

const DepartureFilter = ({ 
  selectedDate, 
  setSelectedDate, 
  isArrival = false, 
  setIsArrival 
}: DepartureFilterProps) => {
  const { translations } = useSettingsContext();
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"departure" | "arrival">(isArrival ? "arrival" : "departure");
  const [selectedHour, setSelectedHour] = useState<number>(13);
  const [selectedMinute, setSelectedMinute] = useState<number>(30);

  useEffect(() => {
    setIsMounted(true);
    if (selectedDate) {
      setSelectedHour(selectedDate.getHours());
      setSelectedMinute(selectedDate.getMinutes());
    } else {
      const now = new Date();
      setSelectedHour(now.getHours());
      setSelectedMinute(now.getMinutes());
      setSelectedDate(now);
    }
  }, []);

  const setToNow = () => {
    const now = new Date();
    setSelectedDate(now);
    setSelectedHour(now.getHours());
    setSelectedMinute(now.getMinutes());
  };

  const handleTimeChange = (newHour: number, newMinute: number) => {
    const newDate = new Date(selectedDate || new Date());
    newDate.setHours(newHour, newMinute);
    setSelectedDate(newDate);
    setSelectedHour(newHour);
    setSelectedMinute(newMinute);
  };

  const handleDateChange = (newDate: Date) => {
    const date = new Date(newDate);
    date.setHours(selectedHour, selectedMinute);
    setSelectedDate(date);
  };

  const incrementHour = () => {
    const newHour = (selectedHour + 1) % 24;
    handleTimeChange(newHour, selectedMinute);
  };

  const decrementHour = () => {
    const newHour = (selectedHour - 1 + 24) % 24;
    handleTimeChange(newHour, selectedMinute);
  };

  const incrementMinute = () => {
    const newMinute = (selectedMinute + 1) % 60;
    handleTimeChange(selectedHour, newMinute);
  };

  const decrementMinute = () => {
    const newMinute = (selectedMinute - 1 + 60) % 60;
    handleTimeChange(selectedHour, newMinute);
  };

  const handleTabChange = (tab: "departure" | "arrival") => {
    setActiveTab(tab);
    if (setIsArrival) {
      setIsArrival(tab === "arrival");
    }
  };

  const generateCalendar = () => {
    if (!selectedDate) return null;

    const currentDate = new Date(selectedDate);
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    
    // Get first day of month and total days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Adjust for Sunday as first day (0) to Monday as first day (1)
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
    
    const days = [];
    const today = new Date();
    
    
    for (let i = 0; i < adjustedFirstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = new Date(year, month, i);
      const isToday = 
        today.getDate() === i && 
        today.getMonth() === month && 
        today.getFullYear() === year;
      
      const isSelected = 
        selectedDate.getDate() === i && 
        selectedDate.getMonth() === month && 
        selectedDate.getFullYear() === year;
      
      days.push(
        <button
          key={`day-${i}`}
          onClick={() => handleDateChange(dayDate)}
          className={`h-10 w-10 rounded-full flex items-center justify-center text-sm
            ${isToday ? 'font-bold' : ''}
            ${isSelected ? 'bg-primary-blue text-white' : 'hover:bg-gray-100'}
          `}
        >
          {i}
        </button>
      );
    }
    
    return days;
  };

  const formatMonth = (date: Date) => {
    // Use German locale for month formatting
    return date.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
  };

  const changeMonth = (increment: number) => {
    if (!selectedDate) return;
    
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + increment);
    handleDateChange(newDate);
  };

  if (!isMounted || !selectedDate) {
    return null;
  }

  // German weekday abbreviations
  const weekdays = ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'];

  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
      {/* Tabs */}
      <div className="flex w-full">
        <button
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === "departure"
              ? "bg-primary-blue text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          onClick={() => handleTabChange("departure")}
        >
          {translations?.ControlPanel?.planner?.filters?.datePicker?.departure || "Abfahrt"}
        </button>
        <button
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === "arrival"
              ? "bg-primary-blue text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          onClick={() => handleTabChange("arrival")}
        >
          {translations?.ControlPanel?.planner?.filters?.datePicker?.arrival || "Ankunft"}
        </button>
      </div>

      {/* Time Selector */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={setToNow}
            className="border border-primary-blue text-primary-blue px-4 py-2 rounded-md hover:bg-primary-blue/5 font-medium"
          >
            {translations?.ControlPanel?.planner?.filters?.datePicker?.now || "Jetzt"}
          </button>
        </div>

        {/* Enhanced Time Selector */}
        <div className="flex justify-center items-center gap-8 py-4">
          {/* Hour selector */}
          <div className="flex flex-col items-center">
            <button 
              onClick={incrementHour}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
              aria-label="Increment hour"
            >
              <ChevronUp size={28} />
            </button>
            <div className="flex items-center justify-center w-20 h-20 text-4xl font-bold my-2 bg-gray-50 rounded-lg">
              {selectedHour.toString().padStart(2, '0')}
            </div>
            <button 
              onClick={decrementHour}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
              aria-label="Decrement hour"
            >
              <ChevronDown size={28} />
            </button>
          </div>

          <div className="text-4xl font-bold">:</div>

          {/* Minute selector */}
          <div className="flex flex-col items-center">
            <button 
              onClick={incrementMinute}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
              aria-label="Increment minute"
            >
              <ChevronUp size={28} />
            </button>
            <div className="flex items-center justify-center w-20 h-20 text-4xl font-bold my-2 bg-gray-50 rounded-lg">
              {selectedMinute.toString().padStart(2, '0')}
            </div>
            <button 
              onClick={decrementMinute}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
              aria-label="Decrement minute"
            >
              <ChevronDown size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-gray-100">
        {/* Month navigation */}
        <div className="flex items-center justify-between bg-primary-blue py-2 px-4 text-white">
          <button 
            onClick={() => changeMonth(-1)}
            className="p-1 rounded-full hover:bg-primary-blue/80"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="font-medium">
            {formatMonth(selectedDate)}
          </div>
          <button 
            onClick={() => changeMonth(1)}
            className="p-1 rounded-full hover:bg-primary-blue/80"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-1 p-2">
          {weekdays.map(day => (
            <div key={day} className="h-8 flex items-center justify-center text-sm text-gray-500 font-medium">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1 p-2">
          {generateCalendar()}
        </div>
      </div>
    </div>
  );
};

export default DepartureFilter;
