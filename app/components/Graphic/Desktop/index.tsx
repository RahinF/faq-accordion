import Image from "next/image";

const DesktopGraphic = () => {
  return (
    <div className="relative self-center h-96 hidden md:block">
      <div className="relative h-full">
        <Image
          src="bg-pattern-desktop.svg"
          alt="background pattern desktop"
          width={500}
          height={500}
          className="absolute w-auto h-full right-4"
          priority
        />
      </div>

      <Image
        src="illustration-woman-online-desktop.svg"
        alt="illustration woman desktop"
        width={500}
        height={500}
        className="absolute top-16 right-4"
        priority
      />

      <Image
        src="illustration-box-desktop.svg"
        alt="illustration box"
        width={130}
        height={125}
        className="absolute top-44 -left-4"
      />
    </div>
  );
};

export default DesktopGraphic;
