import arrow from "../assets/arrow.svg";
import cardOne from "../assets/card-one.svg";
import cardTwo from "../assets/card-two.svg";
import cardThree from "../assets/card-three.svg";
import cardFour from "../assets/card-four.svg";
import shadow from "../assets/shadow.svg";
import { motion } from "framer-motion";

const FirstCTA = () => {
  return (
    <section
      id="firstcta"
      className="overflow-y-clip relative flex h-[750px] w-full items-start justify-center bg-violet-500 px-6 md:h-[900px] md:px-10 lg:h-[592px] lg:items-center xl:px-[159px]"
    ><div className="absolute bottom-0 left-0 right-0 top-0 mx-auto my-auto h-[425px] w-full rounded-full bg-white blur-[350px] sm:w-[425px]" />
      <div className="relative h-[750px] flex flex-col lg:flex-row w-full md:h-[900px] lg:h-[592px] 3xl:max-w-[1200px]">
        <div className="w-full py-16 md:w-[576px] md:py-24">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{ amount: "some", once: true }}
            className="text-4xl font-bold leading-tight tracking-[-0.96px] text-[#fcfcfd] md:text-[48px] md:leading-[60px]"
          >
            Different Card for Different Payments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{ amount: "some", once: true }}
            className="mt-6 text-base font-medium leading-6 text-[#ced5de] md:text-[20px] md:leading-[30px]"
          >
            We revolutionizes the way you make payments, offering a secure,
            convenient, and contactless way to complete transactions
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.4,
                ease: [0.44, 0, 0, 1],
              },
            }}
            className="mt-8 flex h-[56px] w-[190px] relative group overflow-hidden items-center justify-center gap-3 rounded-full bg-white text-base font-medium leading-[28px] text-[#314155] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)] md:mt-12 md:h-[60px] md:w-[202px] md:text-[18px]"
          >
            <div className="absolute -left-1 bottom-0 right-0 z-10 !mx-auto h-[0px] w-[207px] rounded-full bg-black transition-all duration-300 group-hover:h-[61px]" />
            <span className="group-hover:text-white z-10"> Discover More</span>
            <img src={arrow} alt="flecha" className="group-hover:invert z-10" />
          </motion.button>
        </div>

        <div className="">
          <motion.img
            initial={{ opacity: 0, y: 250 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 40,
                stiffness: 160,
                mass: 1,
                delay: 0.2,
              },
            }}
            viewport={{ amount: "some", once: true }}
            src={cardFour}
            alt="card four"
            className="z-[12] lg:-translate-y-0 xl:translate-y-[250px]"
          />
          <motion.img
            initial={{ opacity: 0, y: -130 }}
            whileInView={{
              opacity: 1,
              y: -290,
              transition: {
                type: "spring",
                damping: 40,
                stiffness: 160,
                mass: 1,
                delay: 0.2,
              },
            }}
            viewport={{ amount: "some", once: true }}
            src={cardThree}
            alt="cardThree"
            className="z-[11] rotate -[-30deg] lg:-translate-y-[290px] xl:translate-y-[130px]"
          />
          <motion.img
            initial={{ opacity: 0, y: -500 }}
            whileInView={{
              opacity: 1,
              y: -580,
              transition: {
                type: "spring",
                damping: 40,
                stiffness: 160,
                mass: 1,
                delay: 0.2,
              },
            }}
            viewport={{ amount: "some", once: true }}
            src={cardTwo}
            alt="cardTwo"
            className="z-[10] lg:-translate-y-[580px] xl:-translate-y-[500px]"
          />
          <motion.img
            initial={{ opacity: 0, y: -870 }}
            whileInView={{
              opacity: 1,
              y: -870,
              transition: {
                type: "spring",
                damping: 40,
                stiffness: 160,
                mass: 1,
                delay: 0.2,
              },
            }}
            viewport={{ amount: "some", once: true }}
            src={cardOne}
            alt="cardOne"
            className="xl:-translate-y-[870px] -z-0"
          />
          <motion.img
            initial={{ opacity: 0, y: 0 }}
            whileInView={{
              opacity: 1,
              y: -290,
              transition: {
                type: "spring",
                damping: 40,
                stiffness: 160,
                mass: 1,
                delay: 0.2,
              },
            }}
            viewport={{ amount: "some", once: true }}
            src={shadow}
            alt="shadow"
            className="xl:-translate-y-[290px]"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstCTA;
