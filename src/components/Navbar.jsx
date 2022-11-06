import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen h-[90px] rounded-t-2xl bg-primary fixed bottom-0 px-3 flex flex-col items-center justify-center z-10">
      <nav className="w-full h-14 flex flex-row items-center justify-center max-w-xl md:gap-20 sm:gap-14 p-5 gap-8">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "flex flex-col items-center gap-1 cursor-pointer text-slate-800 group"
              : "flex flex-col items-center gap-1 cursor-pointer text-white group"
          }
        >
          <img
            src="Home.svg"
            alt="Home"
            width={42}
            className="transition-all duration-300"
          />
          <span className="text-xs  font-Bree group-hover:text-slate-700 transition-all duration-300">
            Home
          </span>
        </NavLink>
        <NavLink
          to="/couples"
          className={({ isActive }) =>
            isActive
              ? "flex flex-col items-center gap-1 cursor-pointer text-slate-800 group"
              : "flex flex-col items-center gap-1 cursor-pointer text-white group"
          }
        >
          <img
            src="Couple.svg"
            alt="Couple"
            width={42}
            className="transition-all duration-300"
          />
          <span className="text-xs font-Bree group-hover:text-slate-700 transition-all duration-300">
            Couple
          </span>
        </NavLink>
        <NavLink
          to="/event"
          className={({ isActive }) =>
            isActive
              ? "flex flex-col items-center gap-1 cursor-pointer text-slate-800 group"
              : "flex flex-col items-center gap-1 cursor-pointer text-white group"
          }
        >
          <img
            src="Event.svg"
            alt="Event"
            width={42}
            className="transition-all duration-300 "
          />
          <span className="text-xs font-Bree group-hover:text-slate-700 transition-all duration-300">
            Event
          </span>
        </NavLink>
        <NavLink
          to="/wishes"
          className={({ isActive }) =>
            isActive
              ? "flex flex-col items-center gap-1 cursor-pointer text-slate-800 group"
              : "flex flex-col items-center gap-1 cursor-pointer text-white group"
          }
        >
          <img
            src="Wishes.svg"
            alt="Wishes"
            width={42}
            className="transition-all duration-300 "
          />
          <span className="text-xs font-Bree group-hover:text-slate-700 transition-all duration-300">
            Wishes
          </span>
        </NavLink>
        <NavLink
          to="/gift"
          className={({ isActive }) =>
            isActive
              ? "flex flex-col items-center gap-1 cursor-pointer text-slate-800 group"
              : "flex flex-col items-center gap-1 cursor-pointer text-white group"
          }
        >
          <img
            src="Gift.svg"
            alt="Gift"
            width={42}
            className="transition-all duration-300"
          />
          <span className="text-xs font-Bree group-hover:text-slate-700 transition-all duration-300">
            Gift
          </span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
