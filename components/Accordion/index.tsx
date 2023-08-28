"use client";

import { useState } from "react";
import Tab from "./Tab";
import tabs from "./data";

const Accordion = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  function handleTabClick(id: number) {
    const isTabOpen = selectedTab === id;
    setSelectedTab(isTabOpen ? 0 : id);
  }

  return (
    <article className="py-20 px-8 md:px-0 w-full">
      <h1 className="uppercase font-bold text-4xl mb-4 text-center md:text-left mt-10 md:mt-0">
        faq
      </h1>
      <div className="divide-y">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            tab={tab}
            selectedTab={selectedTab}
            onClick={() => handleTabClick(tab.id)}
          />
        ))}
      </div>
    </article>
  );
};

export default Accordion;
