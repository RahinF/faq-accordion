import { Variants } from "framer-motion";

const arrow: Variants = {
  close: {
    rotate: 0,
    transition: {
      duration: 0.3,
    },
  },
  open: {
    rotate: 180,
    transition: {
      duration: 0.3,
    },
  },
};

const content: Variants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.5,
      },
      opacity: {
        duration: 0.25,
        delay: 0.15,
      },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.5,
      },
      opacity: {
        duration: 0.25,
      },
    },
  },
};

const variants = {
  arrow,
  content,
};

export default variants;
