import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "../api/banner.json";
import Title from "../components/ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 800,
  autoplaySpeed: 3500,
  cssEase: "linear",
  nextArrow: <NextButton />,
  prevArrow: <PrevButton />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

function NextButton({ onClick, className }) {
  return (
    <button
      className={`absolute top-1/2 -right-6 text-purple-700`}
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
}
function PrevButton({ onClick, className }) {
  return (
    <button
      className={` absolute top-1/2 -left-6 text-purple-700`}
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  );
}

const Campaigns = () => {
  const [banners, setBanners] = useState();

  useEffect(() => {
    setBanners(Banners);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <Title>Kampanyalar</Title>
      <Slider className="-mx-2" {...settings}>
        {banners?.length &&
          banners.map((banner, index) => (
            <div key={index}>
              <picture className="block px-2">
                <img src={banner.image} className="rounded-lg" />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Campaigns;
