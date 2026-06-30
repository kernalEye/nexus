"use client";

import { useState, useRef, useEffect } from "react";
import { CalendarDays, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export default function DateRangePicker() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Get today's dynamic date values safely
  const today = new Date();
  const currentDayNum = today.getDate(); // e.g., 28
  const currentMonthStr = today.toLocaleString("default", { month: "short" }); // e.g., "Jun"
  const currentYearNum = today.getFullYear(); // e.g., 2026

  // Set the default initial state to today's date
  const [startDate, setStartDate] = useState<number | null>(currentDayNum);
  const [endDate, setEndDate] = useState<number | null>(currentDayNum);
  const [hoveredDate, setHoveredDate] = useState<number | null>(null);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const handleDateClick = (day: number) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (day < startDate) {
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    }
  };

  // Dynamically render the button label text based on user choices
  const getDisplayDate = () => {
    if (startDate && endDate) {
      if (startDate === endDate) return `${currentMonthStr} ${startDate}, ${currentYearNum}`;
      return `${currentMonthStr} ${startDate} - ${currentMonthStr} ${endDate}, ${currentYearNum}`;
    }
    if (startDate) return `${currentMonthStr} ${startDate}, ${currentYearNum}`;
    return "Select Date Range";
  };

  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div 
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        type="button"
        className="
          group
          flex
          h-11
          items-center
          gap-3
          rounded-2xl
          border
          border-white/10
          bg-[#101426]
          px-4
          transition-all
          duration-300
          hover:border-violet-500/40
          hover:bg-[#151C30]
          hover:shadow-[0_0_30px_rgba(139,92,246,.15)]
        "
      >
        <CalendarDays
          size={18}
          className={`transition-colors duration-300 ${
            isOpen ? "text-violet-400" : "text-slate-400 group-hover:text-violet-400"
          }`}
        />

        <span className="text-sm font-medium text-white min-w-[120px] text-left">
          {getDisplayDate()}
        </span>

        <ChevronDown
          size={16}
          className={`text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-violet-400" : "group-hover:rotate-180"
          }`}
        />
      </button>

      {/* Calendar Dropdown Panel */}
      {isOpen && (
        <div 
          className="
            absolute 
            right-0 
            mt-2 
            w-80 
            origin-top-right 
            rounded-2xl 
            border 
            border-white/10 
            bg-[#0d1121]/95 
            p-4 
            shadow-[0_10px_40px_rgba(0,0,0,0.5)] 
            backdrop-blur-xl 
            z-50
            animate-in 
            fade-in 
            slide-in-from-top-2 
            duration-200
          "
        >
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-white">
              {today.toLocaleString("default", { month: "long" })} {currentYearNum}
            </span>
            <div className="flex gap-1">
              <button type="button" className="p-1 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
                <ChevronLeft size={16} />
              </button>
              <button type="button" className="p-1 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Days of Week Label */}
          <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-slate-500 mb-2">
            <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {/* June starts on a Monday, leaving 1 empty slot for Sunday */}
            <div />

            {/* Render Days */}
            {daysInMonth.map((day) => {
              const isStart = day === startDate;
              const isEnd = day === endDate;
              
              let isInRange = false;
              if (startDate && endDate) {
                isInRange = day >= startDate && day <= endDate;
              } else if (startDate && !endDate && hoveredDate) {
                isInRange = day >= startDate && day <= hoveredDate && day > startDate;
              }

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleDateClick(day)}
                  onMouseEnter={() => setHoveredDate(day)}
                  className={`
                    h-8 
                    w-8 
                    flex 
                    items-center 
                    justify-center 
                    transition-all
                    relative
                    ${isStart || isEnd 
                      ? "bg-violet-600 text-white font-semibold rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.4)] z-10" 
                      : isInRange
                      ? "bg-violet-500/20 text-violet-300 rounded-none"
                      : "text-slate-300 hover:bg-white/5 hover:text-white rounded-lg"
                    }
                    ${isStart && endDate && startDate !== endDate ? "rounded-l-lg rounded-r-none" : ""}
                    ${isEnd && startDate !== endDate ? "rounded-r-lg rounded-l-none" : ""}
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Quick Actions Footer */}
          <div className="mt-4 pt-3 border-t border-white/5 flex justify-end gap-2 text-xs">
            <button 
              type="button" 
              onClick={() => { setStartDate(currentDayNum); setEndDate(null); }}
              className="px-3 py-1.5 rounded-xl text-slate-400 hover:text-white transition-colors"
            >
              Clear
            </button>
            <button 
              type="button" 
              onClick={() => setIsOpen(false)}
              className="px-3 py-1.5 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors shadow-lg shadow-violet-600/20"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}