import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-screen h-screen absolute flex flex-col justify-end items-center m-auto inset-0 pb-[2vh] -z-10">
      <div className="flex justify-center items-centers text-gray-100">
        <span className="text-redbullYellow mr-[0.25vw]">
          &copy;2023 Gregory Buffard
        </span>
        |
        <Link
          href="https://paypal.me/gregorywsb?country.x=FR&locale.x=en_US"
          target={"_blank"}
          className="text-redbullRed cursor-pointer ml-[0.25vw]"
        >
          Support me
        </Link>
      </div>
    </div>
  );
};

export default Footer;
