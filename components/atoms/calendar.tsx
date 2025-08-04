"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface CalendarProps {
  mode?: "single";
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  disabled?: (date: Date) => boolean;
  initialFocus?: boolean;
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({
  selected,
  onSelect,
  disabled,
  className,
}) => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  
  const today = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());
  
  const days = [];
  const current = new Date(startDate);
  
  for (let i = 0; i < 42; i++) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  
  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };
  
  const selectDate = (date: Date) => {
    if (disabled?.(date)) return;
    onSelect?.(date);
  };
  
  return (
    <div className={cn("p-3 bg-background border rounded-md shadow-md", className)}>
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={prevMonth}
          className="p-1 hover:bg-accent rounded"
        >
          ←
        </button>
        <h2 className="font-semibold">
          {monthNames[currentMonth]} {currentYear}
        </h2>
        <button
          type="button"
          onClick={nextMonth}
          className="p-1 hover:bg-accent rounded"
        >
          →
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm font-medium text-muted-foreground p-1">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => {
          const isCurrentMonth = day.getMonth() === currentMonth;
          const isSelected = selected && day.toDateString() === selected.toDateString();
          const isToday = day.toDateString() === today.toDateString();
          const isDisabled = disabled?.(day);
          
          return (
            <button
              key={day.toISOString()}
              type="button"
              onClick={() => selectDate(day)}
              disabled={isDisabled}
              className={cn(
                "p-2 text-sm rounded hover:bg-accent",
                !isCurrentMonth && "text-muted-foreground",
                isSelected && "bg-primary text-primary-foreground",
                isToday && !isSelected && "bg-accent",
                isDisabled && "opacity-50 cursor-not-allowed"
              )}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export { Calendar };
