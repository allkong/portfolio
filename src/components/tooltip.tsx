'use client';

import { ReactNode, useEffect, useState } from 'react';
import clsx from 'clsx';

interface TooltipProps {
  label: string;
  children: ReactNode;
}

const Tooltip = ({ label, children }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const t = setTimeout(() => setIsOpen(false), 1200);
    return () => clearTimeout(t);
  }, [isOpen]);

  return (
    <div tabIndex={0} className="group relative inline-flex">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-describedby={`${label}-tooltip`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
      </button>

      <span
        id={`${label}-tooltip`}
        role="tooltip"
        aria-hidden={!isOpen}
        className={clsx(
          'bg-fg/80 text-bg pointer-events-none absolute top-full left-1/2 mt-1 -translate-x-1/2 rounded-full px-2 text-sm whitespace-nowrap opacity-0 shadow-sm transition-opacity duration-150 ease-out',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        {label}
      </span>
    </div>
  );
};

export default Tooltip;
