"use client";

import React, { useEffect, useState } from "react";

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);
  
  return (
    <div>
      <button onClick={() => setOpen(true)}>
        <i className="ri-menu-2-line text-[28px] font-bold flex lg:hidden"></i>
      </button>

      <aside>
        <div
          className={`fixed top-0 left-0 w-[250px] h-full text-white font-bold text-lg text-center bg-[#55b76b] shadow-lg transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out z-50`}
        >
          <div className="p-4">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
            <nav className="mt-12">
              <ul className="space-y-4">
                <li>
                  <a href="/" className="block">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/shop" className="block">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="/categories" className="block">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="/about" className="block">
                    About us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="block">
                    Contact us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    </div>
  );
}
