import React, { useState, useEffect } from 'react';

function RealTimeClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="real-time-clock">
      <h2>Reloj en Tiempo Real</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default RealTimeClock;
