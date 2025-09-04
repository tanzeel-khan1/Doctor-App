import React from "react";
import { motion } from "framer-motion";
import About from "./About";
import ServiceArea from "./ServiceArea";
import Blogs from "./Blogs"
import Contact from "./Contact";
const Home = () => {
  return (
    <>
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('bg.png')" }}
    >
      <div className="min-h-[30rem] w-full flex flex-col lg:flex-row px-4 sm:px-6 lg:px-0">
        <motion.div
          className="h-full w-full lg:w-[60%] flex flex-col justify-center items-center lg:items-start lg:pl-44 pt-20 lg:pt-28"
          initial={{ opacity: 0, x: -100 }}
          
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-[#FFFFFF] font-semibold text-xl sm:text-2xl lg:text-3xl text-center lg:text-left"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A Wealth of Experience To
          </motion.h1>

          <motion.h1
            className="text-[#FFFFFF] font-semibold text-lg sm:text-xl lg:text-2xl text-center lg:text-left"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Heal And Help You.
          </motion.h1>

          <motion.div
            className="w-full max-w-[39rem] pt-4 text-center lg:text-left px-4 lg:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <p className="text-white text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate suscipit nobis quo totam eum iure yutyutiuoiadipisicing
              elit. the industry's standard dummy text ever since iure
              yutyutiuoiadipisicing elit. the industry's Voluptate suscipit
              nobis quo adipisicing elit.
            </p>
            <p className="text-white text-sm sm:text-base">accusamus autem.</p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-4 w-full max-w-md lg:max-w-none justify-center lg:justify-start"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <button className="bg-[#C7F2FF] p-2 px-4 rounded-md text-sm sm:text-base cursor-pointer hover:bg-white">
              See More
            </button>
            <button className="bg-white p-2 px-4 rounded-md text-sm sm:text-base cursor-pointer hover:bg-[#C7F2FF]">
              Make an Appointment
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-auto flex justify-center lg:justify-start mt-8 lg:mt-[5rem] px-4 lg:px-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
                      whileHover={{ scale: 1.05, rotate: 1 }}
                       viewport={{ once: false, amount: 0.3 }}

        >
          <img
            src="newM.png"
            alt=""
            className="h-64 sm:h-80 lg:h-[30rem] w-auto lg:ml-10 rounded-md object-cover"
          />
        </motion.div>
      </div>
    </div>
    <About/>
    <ServiceArea/>
    <Blogs/>
    <Contact/>
    </>

  );
};

export default Home;
