import Image from "next/image";

const MobileGraphic = () => {
  return (
    <div className="absolute w-full md:hidden">
      <div className="relative">
        <Image
          src="bg-pattern-mobile.svg"
          alt="background pattern mobile"
          width={300}
          height={130}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 "
        />

        <Image
          src="illustration-woman-online-mobile.svg"
          alt="illustration woman mobile"
          width={300}
          height={227}
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/4"
          priority
        />
      </div>
    </div>
  );
};

export default MobileGraphic;
