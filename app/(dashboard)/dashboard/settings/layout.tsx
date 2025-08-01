import SettingsPanel from "@/components/molecules/settings-panel/settings-panel";
import React from "react";

const SettingsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-full">
      <aside className="w-2/10">
        <SettingsPanel />
      </aside>
      <main className="w-8/10 px-10">{children}</main>
    </div>
  );
};

export default SettingsLayout;
