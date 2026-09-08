import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import nikeImage from "../assets/nikeImage.svg";
import converseImage from "../assets/converseImage.svg";
import arcteryxImage from "../assets/arcteryxImage.svg";
import hunterImage from "../assets/hunterImage.svg";
import medialinkImage from "../assets/medialinkImage.svg";
import afterpayImage from "../assets/afterpayImage.svg";

const Working = () => {
  const clients = [
    {
      name: "NIKE",
      image: nikeImage,
      text: "Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.",
    },
    {
      name: "CONVERSE",
      image: converseImage,
      text: "Creative Concepting, Design, Design Management, Project Management, and execution of work from concept to installation across the Country. Cross functional communication and management of third party partners.",
    },
    {
      name: "ARC'TERYX",
      image: arcteryxImage,
      text: "Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California.",
    },
    {
      name: "HUNTER",
      image: hunterImage,
      text: "Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women's, Men's and Kid's zones. Thirty-five (35) additional smaller take-downs in Nordstrom stores across the US.",
    },
    {
      name: "MEDIALINK",
      image: medialinkImage,
      text: "Creative, Design, and Production Partner for 2023 CES. Scope included creation of Branding Identity, Assets, and Digital Content. Design, Production design, Production oversight and installation of client activations.",
    },
    {
      name: "AFTERPAY",
      image: afterpayImage,
      text: "Creative, Design, and Production Partner for 2022 NY Fashion Week Pop-Up space. In Partnership with B-Reel scope including creation, Final Design, Design Assets, 3D Renders, Production design, and Production/Partner oversight.",
    },
  ];

  return (
    <div className="py-20 font-neue">
      {/* Heading */}
      <div className="flex items-center px-4 md:px-10 gap-2 mb-10">
       <span className="inline-block rounded-full bg-primary h-5 w-5"></span>
        <h2 className="font-neue font-normal text-base">WHO WE WORK WITH</h2>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
         slidesOffsetBefore={20}
        grabCursor={true}
        breakpoints={{
          768: {
            slidesPerView:3.7,
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
            <div className="h-95 border-l border-gray-300 px-8 flex flex-col justify-center md:px-10">

              {/* Logo */}
              <div className="h-35 mb-8 flex items-center justify-start">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-contain object-left"
                />
              </div>

              {/* Description */}
              <p className="font-neue text-base leading-[1.15] max-w-82">
                {client.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Working;
