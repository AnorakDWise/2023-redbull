import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-gray-100">
      <span className="text-redbullYellow mr-[0.25vw]">
        &copy;{new Date().getFullYear()} Gregory Buffard
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
  );
};

export default Footer;
