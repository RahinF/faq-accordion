"use client";

import Accordion from "@components/Accordion";
import DesktopGraphic from "@components/Graphic/Desktop";
import MobileGraphic from "@components/Graphic/Mobile";
import useBreakpoint from "@hooks/useBreakpoint";
import clsx from "clsx";

export default function Home() {
  const isMobile = useBreakpoint("md");

  return (
    <main className="grid place-items-center h-screen">
      <section
        className={clsx([
          "h-full w-full px-4 xl:px-0",
          "grid place-items-center",
          "bg-gradient-to-t from-indigo-500 to-purple-400",
        ])}
      >
        <div
          className={clsx([
            "bg-white shadow-2xl rounded-3xl",
            "grid grid-cols-1 md:grid-cols-2 justify-center md:justify-normal gap-4",
            "max-w-sm md:max-w-screen-md w-full relative mt-32 md:mt-0",
          ])}
        >
          {isMobile ? <MobileGraphic /> : <DesktopGraphic />}
          <Accordion />
        </div>
      </section>
    </main>
  );
}
