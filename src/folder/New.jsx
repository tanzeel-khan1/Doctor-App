// import React, { useState } from "react";
// import { CiClock2 } from "react-icons/ci";
// import { FaMessage } from "react-icons/fa6";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const fetchNews = async () => {
//   const res = await axios.get("https://doctor-web-backend-334pvq848-tanzeel0680-6266s-projects.vercel.app/api/news");
//   return res.data;
// };

// const NewsEventsSection = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 3;

//   const { data: allNewsItems = [], isLoading, isError, error } = useQuery({
//     queryKey: ["news"],
//     queryFn: fetchNews,
//   });

//   const totalPages = Math.ceil(allNewsItems.length / itemsPerPage);

//   const getCurrentItems = () => {
//     const startIndex = currentPage * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return allNewsItems.slice(startIndex, endIndex);
//   };

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   if (isLoading) {
//     return <div className="text-center py-16">Loading News...</div>;
//   }

//   if (isError) {
//     return (
//       <div className="text-center py-16 text-red-500">
//         Error fetching news: {error.message}
//       </div>
//     );
//   }

//   return (
//     <div className="py-16 px-4 w-auto md:w-[85%] md:ml-24">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">
//             News & Events
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Contrary to popular belief, Lorem Ipsum is not simply random text.
//             It has roots in a piece of classical Latin literature from 45 BC,
//             making it over 2000 years old. Richard McClintock,
//           </p>
//         </div>

//         <div className="relative mb-12">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {getCurrentItems().map((item) => (
//               <div
//                 key={item._id}
//                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="relative h-48 bg-gray-200 overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
//                     <div className="flex items-center gap-1 whitespace-nowrap">
//                       <CiClock2 className="text-[#34C9B6]" />
//                       <span>{item.date}</span>
//                     </div>

//                     <div className="flex items-center gap-1 whitespace-nowrap md:ml-24 ml-48">
//                       <FaMessage className="text-[#34C9B6]" />
//                       <span>{item.comments}</span>
//                     </div>
//                   </div>

//                   <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight hover:text-teal-600 transition-colors duration-200">
//                     {item.title}
//                   </h3>

//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-center items-center gap-4">
//           <button
//             onClick={() =>
//               handlePageChange(
//                 currentPage === 0 ? totalPages - 1 : currentPage - 1
//               )
//             }
//             className="p-2 rounded-full bg-white shadow-md cursor-pointer hover:shadow-lg transition-all duration-200 hover:bg-gray-50"
//           >
//             <svg
//               className="w-5 h-5 text-gray-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>

//           <div className="flex justify-center gap-2">
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handlePageChange(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
//                   index === currentPage
//                     ? "bg-teal-400 scale-125 shadow-lg"
//                     : "bg-gray-300 hover:bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>

//           <button
//             onClick={() => handlePageChange((currentPage + 1) % totalPages)}
//             className="p-2 rounded-full bg-white shadow-md cursor-pointer hover:shadow-lg transition-all duration-200 hover:bg-gray-50"
//           >
//             <svg
//               className="w-5 h-5 text-gray-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsEventsSection;
import React, { useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { FaMessage } from "react-icons/fa6";

const NewsEventsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  // ✅ Hardcoded News Data
  const allNewsItems = [
    {
      _id: "1",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      date: "Oct 10, 2025",
      comments: "5",
      title: "New Advanced MRI Machine Installed",
      description:
        "Our hospital has introduced a state-of-the-art MRI machine that provides higher resolution imaging and faster results for patients.",
    },
    {
      _id: "2",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e85",
      date: "Oct 5, 2025",
      comments: "12",
      title: "Free Health Checkup Camp Organized",
      description:
        "A free community health checkup camp was successfully held last week, offering diagnostics and consultations to over 300 visitors.",
    },
    {
      _id: "3",
      image: "https://images.unsplash.com/photo-1550831107-1553da8c8464",
      date: "Sep 28, 2025",
      comments: "8",
      title: "Doctor Awareness Seminar Conducted",
      description:
        "Leading specialists conducted a seminar on preventive healthcare, raising awareness about chronic illnesses and lifestyle management.",
    },
    {
      _id: "4",
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
      date: "Sep 20, 2025",
      comments: "3",
      title: "New Pediatrics Wing Opens",
      description:
        "Our new pediatrics department offers world-class facilities and expert doctors to ensure the best care for children.",
    },
    {
      _id: "5",
      image: "https://images.unsplash.com/photo-1624977600206-6f88c3d7c356",
      date: "Sep 10, 2025",
      comments: "6",
      title: "Blood Donation Drive Held Successfully",
      description:
        "More than 150 volunteers participated in our annual blood donation camp. We thank all the donors for their noble contribution.",
    },
  ];

  const totalPages = Math.ceil(allNewsItems.length / itemsPerPage);

  const getCurrentItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allNewsItems.slice(startIndex, endIndex);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="py-16 px-4 w-auto md:w-[85%] md:ml-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            News & Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock,
          </p>
        </div>

        <div className="relative mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentItems().map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1 whitespace-nowrap">
                      <CiClock2 className="text-[#34C9B6]" />
                      <span>{item.date}</span>
                    </div>

                    <div className="flex items-center gap-1 whitespace-nowrap md:ml-24 ml-48">
                      <FaMessage className="text-[#34C9B6]" />
                      <span>{item.comments}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight hover:text-teal-600 transition-colors duration-200">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() =>
              handlePageChange(
                currentPage === 0 ? totalPages - 1 : currentPage - 1
              )
            }
            className="p-2 rounded-full bg-white shadow-md cursor-pointer hover:shadow-lg transition-all duration-200 hover:bg-gray-50"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex justify-center gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentPage
                    ? "bg-teal-400 scale-125 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => handlePageChange((currentPage + 1) % totalPages)}
            className="p-2 rounded-full bg-white shadow-md cursor-pointer hover:shadow-lg transition-all duration-200 hover:bg-gray-50"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsEventsSection;
