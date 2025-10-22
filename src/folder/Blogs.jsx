import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const ExpertTeam = () => {
  // ✅ Hardcoded doctor/team data (API की जगह)
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      pesha: "Cardiologist",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Dr. Michael Lee",
      pesha: "Neurologist",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXRMrZHp2Vv7XePQtwJZrf0FmbXoUWw53iQ&s",
    },
    {
      name: "Dr. Emily Smith",
      pesha: "Pediatrician",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Dr. James Brown",
      pesha: "Orthopedic Surgeon",
      image:
        "https://images.unsplash.com/photo-1573496529574-be85d6a60704?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const StarRating = () => {
    return (
      <div className="flex gap-2 justify-center items-center py-1 ">
        <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
          <a
            href="https://www.facebook.com/Professor.Muhammad.Yunus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-black " />
          </a>
        </div>

        <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
          <a
            href="https://www.google.com/search?q=doctor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGooglePlusG className="text-black " />
          </a>
        </div>

        <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
          <a
            href="https://x.com/search?q=doctor&src=typed_query"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-black " />
          </a>
        </div>

        <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
          <a
            href="https://www.linkedin.com/search/results/all/?keywords=doctors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-black " />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Expert Team
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Meet our highly skilled and compassionate team of doctors who are
          dedicated to providing quality healthcare with expertise and empathy.
        </p>
      </div>

      {/* ✅ Team cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-1"
          >
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full md:h-60 h-auto object-cover"
              />
            </div>

            <div className="p-2 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <h1 className="text-center text-[#3FCCBA]">{member.pesha}</h1>
              <StarRating />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-cyan-300 cursor-pointer mt-10 w-full hover:bg-cyan-400 text-gray-800 font-semibold text-lg px-12 py-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
          Make An Appointment
        </button>
      </div>
    </div>
  );
};

export default ExpertTeam;
