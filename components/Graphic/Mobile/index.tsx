import Image from "next/image";

const MobileGraphic = () => {
  return (
    <div className="absolute w-full">
      <div className="relative">
        <Image
          src="bg-pattern-mobile.svg"
          alt="background pattern"
          width={300}
          height={300}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2"
        />

        <Image
          src="illustration-woman-online-mobile.svg"
          alt="illustration woman"
          width={300}
          height={300}
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/4"
        />
      </div>
    </div>
  );
};

export default MobileGraphic;
