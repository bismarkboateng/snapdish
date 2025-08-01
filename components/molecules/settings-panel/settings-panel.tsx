"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { menuItems } from "./settings-panel.utils";

const SettingsPanel = () => {
  const pathname = usePathname();

  return (
    <section className="bg-white p-4 rounded shadow border border-gray-100 h-screen">
      <h3 className="text-xl font-semibold">Settings</h3>
      <p className="text-sm mt-1 text-gray-500">
        You can find all settings here.
      </p>

      <section className="flex flex-col gap-6 mt-10">
        {menuItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex items-center gap-2 px-2 py-3 rounded-md transition-colors",
                isActive
                  ? "bg-orange-base/5 text-gray-500"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              )}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          );
        })}
      </section>
    </section>
  );
};

export default SettingsPanel;
