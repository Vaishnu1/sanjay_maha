import { useEffect, useState } from 'react';

const Countdown = () => {
  // SET YOUR WEDDING DATE HERE
  const weddingDate = '2025-08-28T18:00:00';

  const calculateTimeLeft = () => {
    const difference = +new Date(weddingDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="text-center">
      <h2 className="text-4xl font-serif text-primary mb-6">Join Us In</h2>
      <div className="flex justify-center space-x-4 md:space-x-8 text-accent">
        {Object.entries(timeLeft).map(([interval, value]) => (
          <div key={interval} className="text-center bg-background/50 p-4 rounded-lg shadow-md w-24">
            <div className="text-4xl font-bold">{value}</div>
            <div className="text-sm uppercase">{interval}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;