import Isotope from "isotope-layout";
import dynamic from "next/dynamic";
import { Fragment, useEffect, useRef, useState } from "react";
import SectionContainer from "../layout/SectionContainer";
import { dataImage } from "../utils";
import ImageView from "./ImagePopup";
import { Detail, Soundcloud } from "./Popup";

const Portfolio = () => {
  const ModalVideo = dynamic(
    () => {
      return import("react-modal-video");
    },
    { ssr: false }
  );

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    console.log(data);
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
          // layoutMode: "fitRows",
        });
      }, 3000);
    }

    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  useEffect(() => {
    setTimeout(() => {
      dataImage();
    }, 2000);
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  return (
    <Fragment>
      <ImageView />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="337293658"
        animationSpeed={300}
        onClose={() => setIsOpen2(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        modalVideoClose="mfp-close"
      />
      <Soundcloud isOpen3={isOpen3} toggleModalThree={toggleModalThree} />
      <Detail isOpen4={isOpen4} toggleModalFour={toggleModalFour} />
      <SectionContainer navName="portfolio">
        <div className="section_inner">
          <div className="cavani_tm_portfolio w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Projects
              </span>
            </div>
            <div className="portfolio_filter w-full h-auto clear-both float-left text-left relative px-0 pt-[55px] pb-[2px]">
              <ul>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="current text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter="*"
                    onClick={handleFilterKeyChange("*")}
                  >
                    
                  </a>
                </li>
        
              </ul>
            </div>
            <div className="portfolio_list w-full h-auto clear-both float-left">
              <ul className="gallery_zoom ml-[-50px]">
                <li className="youtube mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/habitrak.png"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Habitrack
                        </h3>
                      </div>
                      <a
                        className="cavani_tm_full_link popup-youtube"
                        href="https://www.habitrak.app/signin"
                      />
                    </div>
                  </div>
                </li>
                <li className="vimeo mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/comprext.png"
                      
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Comprext
                        </h3>
                      </div>
                      <a
                        className="cavani_tm_full_link popup-vimeo"
                        href="https://comprext.vercel.app/"
                
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Fragment>
  );
};
export default Portfolio;
