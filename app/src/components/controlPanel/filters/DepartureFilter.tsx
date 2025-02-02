import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface DepartureFilterProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const DepartureFilter = ({ selectedDate, setSelectedDate }: DepartureFilterProps) => {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const t = useTranslations('ControlPanel.planner.filters.datePicker');

  const setToNow = () => {
    setSelectedDate(new Date());
  };

  return (
    <div className="p-4 border rounded bg-gray-50">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <button
            onClick={setToNow}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 text-sm"
          >
            {t('setToNow')}
          </button>
        </div>
        
        {/* Date Picker */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('date')}</label>
          <input
            type="date"
            value={selectedDate.toISOString().split('T')[0]}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Time Picker */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('time')}</label>
          <input
            type="time"
            value={selectedDate.toTimeString().slice(0, 5)}
            onChange={(e) => {
              const [hours, minutes] = e.target.value.split(':');
              const newDate = new Date(selectedDate);
              newDate.setHours(parseInt(hours), parseInt(minutes));
              setSelectedDate(newDate);
            }}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default DepartureFilter;
