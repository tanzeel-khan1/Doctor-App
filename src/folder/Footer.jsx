import React from 'react';
const Footer = () => {
  return (
    <>
      <div
        className="relative w-full min-h-[300px] py-10 px-4 sm:px-8 lg:px-16 bg-center bg-cover md:bg-white bg-[#34C9B6]"
        style={{ backgroundImage: "url('footer.png')" }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center text-white">
          <div className="mb-8 md:mb-0 max-w-sm ml-0 md:ml-24  mt-0 md:mt-20">
            <h1 className="font-bold text-xl sm:text-2xl text-[#C7F2FF]">
              Medi
              <span className="font-bold text-xl sm:text-2xl text-white">site</span>
            </h1>
            <p className="mt-2 text-sm sm:text-base">
              When Stan Britten established BritKare in 1995, he did so with a true desire to assist the medical community with the quality care of their desire.
            </p>
          </div>

          <div className="mb-8 md:mb-0 mt-0 md:mt-20">
            <h3 className="font-semibold text-lg mb-2">Links</h3>
            <ul className="space-y-1 text-sm">
              <li>Service Area</li>
              <li>Blogs</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0 mt-0 md:mt-20">
            <h3 className="font-semibold text-lg mb-2">Contact's</h3>
            <ul className="space-y-1 text-sm">
              <li>33 Street Saadi Town, near Malir cantt</li>
              <li>+92 322 2155556</li>
              <li>+92 322 2155556</li>
              <li>myousufk87@gmail.com</li>
            </ul>
          </div>

          <div className='flex flex-col items-start mt-0 md:mt-20'>
            <h4 className="text-lg font-semibold mb-4">Follow us on</h4>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-red-400 font-bold text-sm">G+</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-teal-400 font-bold text-sm">f</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;