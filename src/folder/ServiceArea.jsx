import React from "react";
import { motion } from "framer-motion";

const ServiceArea = () => {
  return (
    <div className="h-auto lg:h-[20rem] w-full flex flex-col lg:flex-row mt-10">
      
      <motion.div
        className="h-full w-full lg:w-[60%] flex flex-col justify-center px-6 lg:px-36 py-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }} 
      >
        <h1 className="font-semibold text-3xl lg:text-4xl">
          Medicare Supplement
        </h1>
        <h1 className="font-semibold text-3xl lg:text-4xl">Advocate</h1>

        <p className="font-extralight text-[#757373] mt-6">
          Contrary to popular belief, Lorem Ipsum is not simply
        </p>
        <p className="font-extralight text-[#757373]">
          random text. It has roots in a piece of classical Latin
        </p>
        <p className="font-extralight text-[#757373]">
          Richard McClintock, a Latin professor at
        </p>
        <p className="font-extralight text-[#757373]">
          Hampden-Sydney College in Virginia.
        </p>

        <button className="bg-[#34C9B6] p-2 px-4 rounded-md text-sm sm:text-base cursor-pointer hover:bg-white hover:text-[#34C9B6] border border-[#34C9B6] mt-8 w-fit">
          See More
        </button>
      </motion.div>

      <motion.img
        src="About.png"
        alt="About"
        className="w-full lg:w-[40%] object-cover mt-6 lg:mt-0"
        
      />
    </div>
  );
};

export default ServiceArea;
