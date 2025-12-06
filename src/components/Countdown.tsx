import { useEffect, useState } from "react";

import { WEDDING_DATE } from "../globals";

interface CountdownTime {
  months: number;
  days: number;
  hours: number;
}

export const Countdown = () => {
  // Random target date for now
  const targetDate = new Date(WEDDING_DATE);

  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    months: 0,
    days: 0,
    hours: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ months: 0, days: 0, hours: 0 });
        return;
      }

      // Calculate months, days, hours
      const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
      const months = Math.floor(totalDays / 30); // approximate
      const days = totalDays % 30;
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

      setTimeLeft({ months, days, hours });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center space-y-2 text-white">
      <div className="flex space-x-4 md:space-x-8 text-6xl font-title">
        <div className="text-center">
          <div className="mb-3">
            {timeLeft.months.toString().padStart(2, "0")}
          </div>
          <div className="text-sm font-body">Months</div>
        </div>
        <span>:</span>
        <div className="text-center">
          <div className="mb-3">
            {timeLeft.days.toString().padStart(2, "0")}
          </div>
          <div className="text-sm font-body">Days</div>
        </div>
        <span>:</span>
        <div className="text-center">
          <div className="mb-3">
            {timeLeft.hours.toString().padStart(2, "0")}
          </div>
          <div className="text-sm font-body">Hours</div>
        </div>
      </div>
    </div>
  );
};
