"use client";

import { useState } from "react";

import MenuIcon from "@icons/menu.svg";
import CloseIcon from "@icons/close.svg";

const SECTIONS = [
  { id: "about", label: "About me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full top-0">
      <nav className="flex items-center justify-between px-4 py-3 sm:px-20 sm:py-5">
        <a href="#hero">Portfolio</a>

        {/* desktop 내비게이션 */}
        <ul className="hidden sm:flex gap-10">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-xl">
                {s.label}
              </a>
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

      {/* mobile 메뉴 오버레이 */}
      {isOpen && (
        <div
          aria-labelledby="mobile-menu-title"
          role="dialog"
          aria-modal="true"
          className="z-50 fixed inset-0"
        >
          <div className="absolute inset-0 bg-black/60" onClick={handleClose} />

          <div className="absolute px-4 py-3 bg-white right-0 shadow-2xl translate-x-0 top-0 h-full w-3/5 flex flex-col justify-between">
            <h2 id="mobile-menu-title" className="sr-only">
              Menu
            </h2>
            <div className="flex justify-end">
              <button onClick={handleClose}>
                <CloseIcon />
              </button>
            </div>

            <ul className="space-y-10 flex flex-col items-center text-xl">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} onClick={handleClose}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex justify-center space-x-3">
              <a>Github</a>
              <a>Tistory</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
