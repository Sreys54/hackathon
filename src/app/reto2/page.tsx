'use client';
import React, { useEffect, useState } from 'react';

export default function Reto2() {
  const DURATION = 10; // seconds
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    // start a simple interval and clear when finished or on unmount
    const id = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(id);
          setRunning(false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [running]);

  const handleClick = () => {
    if (!running && timeLeft === DURATION) {
      setRunning(true);
    }
    if (!running && timeLeft === 0) return; // finished
    setClicks((c) => c + 1);
  };

  const handleRestart = () => {
    setClicks(0);
    setTimeLeft(DURATION);
    setRunning(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 gap-6">
      <h1 className="text-3xl font-bold">Reto 2 - Click Game</h1>

  <div className="w-[420px] h-[300px] bg-red-300 flex flex-col items-center justify-center rounded shadow">
        <div className="text-6xl font-bold">{clicks}</div>
        <div className="mt-4 text-lg">Time left: {timeLeft} seconds</div>

        <button
          onClick={handleClick}
          className={`mt-6 px-4 py-2 rounded border bg-white hover:bg-gray-100 text-2xl`}
          aria-label="click-button"
        >
          +
        </button>
      </div>

      {!running && timeLeft === 0 ? (
        <div className="flex flex-col items-center gap-3">
          <div className="text-xl">Time&apos;s up! You clicked {clicks} times.</div>
          <button className="px-4 py-2 rounded bg-blue-600 text-white" onClick={handleRestart}>
            Restart
          </button>
        </div>
      ) : null}
    </main>
  );
}
