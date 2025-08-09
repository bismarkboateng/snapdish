"use client";

import { usePathname } from "next/navigation";
import { menuItems } from "./settings-panel.utils";
import SettingsMenuItem from "@/components/molecules/settings-panel/settings-menu-item";

const SettingsPanel = () => {
  const pathname = usePathname();

  return (
    <section className="border border-gray-200 bg-white p-4 lg:p-6 rounded-2xl lg:shadow-md h-full lg:h-fit lg:sticky lg:top-6">
      <div className="mb-6 lg:mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div>
            <h3 className="text-lg lg:text-xl font-bold text-gray-900">
              Settings
            </h3>
            <p className="text-sm text-gray-600 hidden sm:block">
              Manage your account preferences
            </p>
          </div>
        </div>
      </div>

      <nav className="space-y-1 lg:space-y-2">
        {menuItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <SettingsMenuItem
              key={href}
              href={href}
              label={label}
              icon={Icon}
              isActive={isActive}
            />
          );
        })}
      </nav>
    </section>
  );
};

export default SettingsPanel;
