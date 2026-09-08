import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Working = () => {
  const clients = [
    {
      name: "NIKE",
      text: "Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.",
    },
    {
      name: "CONVERSE",
      text: "Creative Concepting, Design, Design Management, Project Management, and execution of work from concept to installation across the Country. Cross functional communication and management of third party partners.",
    },
    {
      name: "ARC'TERYX",
      text: "Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California.",
    },
    {
      name: "HUNTER",
      text: "Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women's, Men's and Kid's zones. Thirty-five (35) additional smaller take-downs in Nordstrom stores across the US.",
    },
    {
      name: "MEDIALINK",
      text: "Creative, Design, and Production Partner for 2023 CES. Scope included creation of Branding Identity, Assets, and Digital Content. Design, Production design, Production oversight and installation of client activations.",
    },
    {
      name: "AFTERPAY",
      text: "Creative, Design, and Production Partner for 2022 NY Fashion Week Pop-Up space. In Partnership with B-Reel scope including creation, Final Design, Design Assets, 3D Renders, Production design, and Production/Partner oversight.",
    },
  ];

  return (
    <section className="px-4 md:px-10 py-20">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-20">
        <span className="w-3 h-3 rounded-full bg-primary" />

        <h2 className="font-neue text-lg md:text-xl">
          WHO WE WORK WITH
        </h2>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        grabCursor={true}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="working-swiper"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="h-95 border-l border-gray-300 px-8 md:px-10">
              
              {/* Image / Logo Space */}
              <div className="h-28 mb-8 flex items-start">
                {/* Add image here later */}
              </div>

              {/* Description */}
              <p className="font-neue text-lg leading-[1.15] max-w-82">
                {client.text}
              </p>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Working;