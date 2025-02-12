import React from "react";
import logo from "./assets/mediprime-logo.png";
import { motion } from "framer-motion";

const Navbar = () => {

  const handleScroll = (e:React.MouseEvent<HTMLAnchorElement,MouseEvent>) => {
    //first prevent the default behavior
    

    //get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;

    const targetId = href.replace(/.*#/, "");

    //get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior:'smooth', });
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
          ease: [0.44, 0, 0, 1],
        },
      }}
      viewport={{ amount: "all", once: true }}
      className="fixed left-0 right-0 top-[19px] z-50 mx-[24px] flex h-[65px] items-center justify-between rounded-[32px] bg-white/10 px-6 shadow-[0_57px_96px_-8px_rgba(87,92,95,0.25)] outline outline-4 -outline-offset-[4px] outline-white/[38%] backdrop-blur-[4px] md:mx-[40px] md:h-[80px] md:px-8 xl:mx-[95px] 3xl:mx-auto 3xl:max-w-[1250px]"
    >
      <div className="flex items-center justify-center gap-18">
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="w-[120px] cursor-pointer md:w-[142px]"
          />
        </a>
        <div className="hidden items-center justify-center gap-[20px] text-base font-semibold leading-[24px] text-[#445568] md:flex md:gap-[32px] xl:text-[18px]">
          <a
            href="/#hero"
            className="cursor-pointer transition-all hover:text-[#445568]/50 "
            onClick={handleScroll}
          >
            Home
          </a>
          <a
            href="/#features"
            className="cursor-pointer transition-all hover:text-[#445568]/50 "
            onClick={handleScroll}
          >
            Who we are
          </a>
          <a
            href="/#firstcta"
            className="cursor-pointer transition-all hover:text-[#445568]/50 "
            onClick={handleScroll}
          >
            Payments
          </a>
          <a
            href="/#services"
            className="cursor-pointer transition-all hover:text-[#445568]/50 "
            onClick={handleScroll}
          >
            Services
          </a>
        </div>
      </div>
      <a href="/#get-app">
        <button className="btn-shadow group relative flex h-[38px] w-[110px] items-center justify-center overflow-hidden rounded-full bg-violet-900 text-sm font-medium leading-[24px] text-white outline outline-4 -outline-offset-[0px] outline-white/[55%] transition-all hover:outline-[5px] hover:-outline-offset-1 hover:outline-white/[100%] md:h-[48px] xl:w-[154px] xl:text-[18px]">
          <div className="absolute -bottom-[2px] -left-1 right-0 z-10 !mx-auto h-[0px] w-[160px] rounded-full bg-white transition-all duration-300 group-hover:h-[52px]" />
          <span className="z-[11] uppercase text-[14px] group-hover:text-black">
            Book Now
          </span>
        </button>
      </a>
    </motion.nav>
  );
};

export default Navbar;
