import SettingsPanel from "@/components/molecules/settings-panel/settings-panel";
import React from "react";

const SettingsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col 2xl:flex-row w-full min-h-screen">
      <aside className="w-full xl:w-96 border-b lg:border-b-0">
        <div className="sticky top-16">
          <SettingsPanel />
        </div>
      </aside>
      <main className="flex-1 px-0 md:px-0 lg:px-0 2xl:px-10 py-6 lg:py-8">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default SettingsLayout;
