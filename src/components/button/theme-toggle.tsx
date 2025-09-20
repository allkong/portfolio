'use client';

import { useEffect, useState } from 'react';

import SunIcon from '@icons/sun.svg';
import MoonIcon from '@icons/moon.svg';

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [dark]);

  return (
    <button
      aria-label="toggle theme"
      onClick={() => setDark(!dark)}
      className="bg-fg/50 fixed right-6 bottom-6 z-10 rounded-full p-2 shadow-lg transition"
    >
      {dark ? <MoonIcon className="text-bg" /> : <SunIcon className="text-bg" />}
    </button>
  );
};

export default ThemeToggle;
