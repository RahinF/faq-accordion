import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import variants from "./variants";

interface Tab {
  id: number;
  heading: string;
  content: string;
}

interface Props {
  tab: Tab;
  selectedTab: number;
  onClick: () => void;
}

const Tab = ({ tab, selectedTab, onClick }: Props) => {
  const { id, heading, content } = tab;

  const isOpen = id === selectedTab;

  const MotionArrow = motion(Image);

  return (
    <div className="max-w-xs">
      <h3 className="py-4">
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={onClick}
          className="flex items-center group justify-between w-full"
        >
          <span
            className={clsx(
              ["group-hover:text-orange-400 transition text-sm"],
              { "font-bold": isOpen }
            )}
          >
            {heading}
          </span>
          <MotionArrow
            variants={variants.arrow}
            animate={isOpen ? "open" : "close"}
            src="/icon-arrow-down.svg"
            alt="arrow icon"
            height={12}
            width={12}
            className="w-auto h-auto"
          />
        </button>
      </h3>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={variants.content}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-prose"
          >
            <p className="pb-4 text-sm">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tab;
