"use client";

import SearchBar from "./search-bar";
import ThemeToggle from "./theme-toggle";
import NotificationButton from "./notification-button";
import ProfileDropdown from "./profile-dropdown";
import DateRangePicker from "./date-range-picker";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-white/10 bg-[#050816]/95 backdrop-blur-xl">
      <div className="flex h-full items-center justify-between gap-4 px-4 md:px-6 xl:px-8">

        {/* Search */}
        <div className="flex flex-1 justify-center lg:justify-start">
          <SearchBar />
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 md:gap-3 xl:gap-4">

          <ThemeToggle />

          <NotificationButton />

          <ProfileDropdown />

          <div className="hidden xl:block">
            <DateRangePicker />
          </div>

        </div>
      </div>
    </header>
  );
}