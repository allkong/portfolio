'use client';

import { useEffect, useState } from 'react';

import Logo from '@images/logo.svg';
import MenuIcon from '@icons/menu.svg';
import CloseIcon from '@icons/close.svg';

const SECTIONS = [
  { id: 'about', label: 'About me' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="font-special-elite">
      <header className="fixed top-0 z-20 w-full backdrop-blur-[2px]">
        <nav className="flex items-center justify-between px-4 py-3 sm:px-20 sm:py-5">
          <a href="#hero">
            <Logo />
          </a>

          {/* desktop 내비게이션 */}
          <ul className="hidden gap-10 text-lg sm:flex">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.label}</a>
              </li>
            ))}
          </ul>

          {/* mobile 햄버거 버튼 */}
          <button
            aria-label="open menu"
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
            className="sm:hidden"
          >
            <MenuIcon />
          </button>
        </nav>
      </header>

      {/* mobile 메뉴 오버레이 */}
      {isOpen && (
        <div
          aria-labelledby="mobile-menu-title"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50"
        >
          <div className="absolute inset-0 bg-black/60" onClick={handleClose} />

          <div className="bg-bg absolute top-0 right-0 flex h-full w-3/5 translate-x-0 flex-col justify-between px-4 py-3 shadow-2xl">
            <h2 id="mobile-menu-title" className="sr-only">
              Menu
            </h2>
            <div className="flex justify-end">
              <button onClick={handleClose}>
                <CloseIcon />
              </button>
            </div>

            <ul className="flex flex-col items-center space-y-10 text-xl">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} onClick={handleClose}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex justify-center space-x-3">
              <a href="https://github.com/allkong" target="_blank" rel="noreferrer">
                Github
              </a>
              <a href="https://allkong.tistory.com" target="_blank" rel="noreferrer">
                Tistory
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
