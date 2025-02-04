import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface DepartureFilterProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
}

const DepartureFilter = ({ selectedDate, setSelectedDate }: DepartureFilterProps) => {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const t = useTranslations('ControlPanel.planner.filters.datePicker');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const setToNow = () => {
    setSelectedDate(new Date());
  };

  if (!isMounted) {
    return null; // or return a loading skeleton
  }

  return (
    <div className="p-4 border rounded bg-white shadow-sm">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <button
            onClick={setToNow}
            className="bg-[#1a365d] text-white px-4 py-2 rounded hover:bg-[#2d4a7c] transition-colors text-sm"
          >
            {t('setToNow')}
          </button>
        </div>
        
        {/* Date Picker */}
        <div>
          <label className="block text-sm font-medium text-[#1a365d] mb-2">{t('date')}</label>
          <input
            type="date"
            value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
            className="w-full p-2 border border-[#1a365d]/20 rounded focus:border-[#1a365d] focus:ring-1 focus:ring-[#1a365d] outline-none"
          />
        </div>

        {/* Time Picker */}
        <div>
          <label className="block text-sm font-medium text-[#1a365d] mb-2">{t('time')}</label>
          <input
            type="time"
            value={selectedDate ? selectedDate.toTimeString().slice(0, 5) : ''}
            onChange={(e) => {
              const [hours, minutes] = e.target.value.split(':');
              const newDate = new Date(selectedDate || new Date());
              newDate.setHours(parseInt(hours), parseInt(minutes));
              setSelectedDate(newDate);
            }}
            className="w-full p-2 border border-[#1a365d]/20 rounded focus:border-[#1a365d] focus:ring-1 focus:ring-[#1a365d] outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default DepartureFilter;
