'use client';

import { useState } from 'react';

export default function Reto4() {
  const [isDark, setIsDark] = useState(false);

  return (
    <main className={isDark ? 'bg-gray-900 text-white min-h-screen p-8' : 'bg-white text-gray-900 min-h-screen p-8'}>
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-4xl font-bold mb-8">Reto 4</h1>
        
        <h2 className="text-2xl mb-4">{isDark ? 'DARK' : 'LIGHT'} MODE</h2>
        
        <button
          onClick={() => setIsDark(!isDark)}
          className={isDark ? 'w-32 h-16 bg-gray-700 rounded-full p-1 flex items-center' : 'w-32 h-16 bg-gray-300 rounded-full p-1 flex items-center'}
        >
          <div className={isDark ? 'w-14 h-14 bg-white rounded-full ml-auto flex items-center justify-center' : 'w-14 h-14 bg-white rounded-full flex items-center justify-center'}>
            <span className="text-2xl">{isDark ? '🌙' : '☀️'}</span>
          </div>
        </button>
        
      </div>
    </main>
  );
}
