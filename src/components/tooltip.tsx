'use client';

import { ReactNode, useEffect, useId, useState } from 'react';
import clsx from 'clsx';

interface TooltipProps {
  label: string;
  children: ReactNode;
  autoHideMs?: number;
}

const Tooltip = ({ label, children, autoHideMs = 1200 }: TooltipProps) => {
  const [isOpenByClick, setIsOpenByClick] = useState(false);
  const [isHoverOrFocus, setIsHoverOrFocus] = useState(false);
  const id = useId();

  const visible = isOpenByClick || isHoverOrFocus;

  useEffect(() => {
    if (!isOpenByClick || autoHideMs <= 0) {
      return;
    }
    const t = setTimeout(() => {
      setIsOpenByClick(false);
      setIsHoverOrFocus(false);
    }, autoHideMs);
    return () => clearTimeout(t);
  }, [isOpenByClick, autoHideMs]);

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        aria-label={label}
        {...(visible ? { 'aria-describedby': `${id}-tooltip` } : {})}
        onClick={() => setIsOpenByClick((v) => !v)}
        onMouseEnter={() => setIsHoverOrFocus(true)}
        onMouseLeave={() => setIsHoverOrFocus(false)}
        onFocus={() => setIsHoverOrFocus(true)}
        onBlur={() => setIsHoverOrFocus(false)}
        onKeyDown={(e) => e.key === 'Escape' && setIsOpenByClick(false)}
      >
        {children}
      </button>

      <span
        id={`${id}-tooltip`}
        role="tooltip"
        aria-hidden={!visible}
        className={clsx(
          'pointer-events-none absolute top-full left-1/2 z-20 mt-1 -translate-x-1/2 rounded-full px-2 py-0.5 text-sm whitespace-nowrap shadow-sm transition-opacity duration-150 ease-out',
          'bg-fg/80 text-bg',
          visible ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        {label}
      </span>
    </div>
  );
};

export default Tooltip;
