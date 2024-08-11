"use client";
import React, { useEffect, useState } from "react";
import { useHamburgerOverlay } from "../../store/use-hamburger-overlay";
import { FaX } from "react-icons/fa6";

export default function HamburgerMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);
  const { isOpen, onClose } = useHamburgerOverlay();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return;
  }

  return (
    <>
      {children}
      {isOpen && (
        <div
          onClick={onClose}
          className="transition fixed inset-0 w-full h-full backdrop-blur-lg z-30"
        >
          <button className="absolute top-4 right-4" onClick={onClose}>
            <FaX className="size-5" />
          </button>
          <nav className="h-full gap-8 flex justify-center items-center flex-col">
            <a
              onClick={onClose}
              href="#home"
              className="hover:text-white text-white/70 transition-all text-2xl"
            >
              Home
            </a>
            <a
              onClick={onClose}
              href="#partners"
              className="hover:text-white text-white/70 transition-all text-2xl"
            >
              Partners
            </a>
            <a
              onClick={onClose}
              href="#feature"
              className="hover:text-white text-white/70 transition-all text-2xl"
            >
              Feature
            </a>
            <a
              onClick={onClose}
              href="#testimonials"
              className="hover:text-white text-white/70 transition-all text-2xl"
            >
              Testimonials
            </a>
            <a
              onClick={onClose}
              href="#actions"
              className="hover:text-white text-white/70 transition-all text-2xl"
            >
              Actions
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
