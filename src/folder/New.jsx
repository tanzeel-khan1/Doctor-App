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
      image: "data:image/jpeg;base64,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",
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
      image: "https://hips.hearstapps.com/hmg-prod/images/types-of-doctors-1600114658.jpg?crop=0.974xw:0.729xh;0,0&resize=640:*",
      date: "Sep 10, 2025",
      comments: "6",
      title: "Blood Donation Drive Held Successfully",
      description:
        "More than 150 volunteers participated in our annual blood donation camp. We thank all the donors for their noble contribution.",
    },
    {
      _id: "6",
      image: "https://post.healthline.com/wp-content/uploads/2020/06/orthopedic-doctor-ankle-1296x728-header.jpg",
      date: "Sep 11, 2025",
      comments: "6",
      title: "All Respect to Our Healthcare Heroes",
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
