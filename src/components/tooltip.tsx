'use client';

import { ReactNode, useEffect, useId, useState } from 'react';
import clsx from 'clsx';

interface TooltipProps {
  label: string;
  children: ReactNode;
}

const Tooltip = ({ label, children }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

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
        aria-label={label}
        {...(isOpen ? { 'aria-describedby': `${id}-tooltip` } : {})}
        onClick={() => setIsOpen((v) => !v)}
      >
        {children}
      </button>

      <span
        id={`${id}-tooltip`}
        role="tooltip"
        aria-hidden={!isOpen}
        className={clsx(
          'bg-fg/80 text-bg pointer-events-none absolute top-full left-1/2 mt-1 -translate-x-1/2 rounded-full px-2 text-sm whitespace-nowrap opacity-0 shadow-sm transition-opacity duration-150 ease-out group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        {label}
      </span>
    </div>
  );
};

export default Tooltip;
