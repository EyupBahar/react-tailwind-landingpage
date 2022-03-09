import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import Menu from "../components/ui/menu";

function Footer() {
  const menus = [
    {
      title: "Getir' i Keşfedin",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "İletişim",
        },
        {
          title: "COVID-19 Duyuru",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
    {
      title: "Getir' i Keşfedin",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "İletişim",
        },
        {
          title: "COVID-19 Duyuru",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
  ];
  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 pt-10">
          <section>
            <nav className="grid gap-y-4">
              <h6 className="text-lg text-primary-brand-color">
                Getir'i indirin
              </h6>
              <a href="#">
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt=""
                />
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}
        </div>
        <div className="flex justify-between items-center border-t border-gray-200 mt-6 py-6">
          <div className="text-sm text-gray-700 flex gap-x-8">
            &copy; 2021 Getir
            <a
              href="#"
              className="text-primary-brand-color hover:underline relative before:w-[3px] before:h-[3px] before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2"
            >
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="flex">
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-gray-700 hover:bg-primary-brand-color hover:bg-opacity-80 flex items-center justify-center"
            >
              <FaFacebook size={21} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-gray-700 hover:bg-primary-brand-color hover:bg-opacity-80 flex items-center justify-center"
            >
              <FaTwitter size={21} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-gray-700 hover:bg-primary-brand-color hover:bg-opacity-80 flex items-center justify-center"
            >
              <FaInstagram size={21} />
            </a>
            <a
              href="#"
              className="h-8 transition-colors hover:bg-p flex items-center px-2 gap-x-2 text-gray-500 border border-gray-100 hover:text-primary-brand-color"
            >
              <FiGlobe size={21} />
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
