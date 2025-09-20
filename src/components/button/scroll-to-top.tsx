'use client';

import UpIcon from '@icons/up.svg';

const ScrollToTop = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      aria-label="scroll to top"
      onClick={handleScrollTop}
      className="bg-fg/50 rounded-full p-2 shadow-lg"
    >
      <UpIcon className="text-bg" />
    </button>
  );
};

export default ScrollToTop;
