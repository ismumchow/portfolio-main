import { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";
import SectionContainer from "../layout/SectionContainer";
import { imgToSvg } from "../utils";

const Service = () => {
  useEffect(() => {
    imgToSvg();
  }, []);

  const services = [
    {
      img: "assets/img/news/3.jpg",
      icon: "assets/img/svg/character.svg",
      text: "As a skilled software engineer, I possess extensive proficiency in React.js, TypeScript, Redux, and Next.js. With React.js, I excel at developing dynamic and highly responsive user interfaces, leveraging the power of component-based architecture. I utilize TypeScript to ensure type safety, enhancing the reliability and maintainability of my code. In terms of state management, I have a deep understanding of Redux and its ecosystem. I architect efficient solutions, implementing Redux middleware and advanced techniques like asynchronous actions to seamlessly integrate with APIs and backend services. This enables smooth data flow and enables effective handling of application states. Furthermore, my expertise extends to Next.js, a robust React framework. I leverage Next.js to build server-rendered and statically exported applications, optimizing performance and enabling improved search engine optimization (SEO) capabilities.",
      date: "August 9, 2021",
      title: "Software Engineer",
      text1:
        "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      text2:
        "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      text3:
        "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    },
    {
      img: "assets/img/news/6.jpg",
      icon: "assets/img/svg/presentation.svg",
      text: "On the front-end, I excel in creating engaging user interfaces using modern frameworks like React.js and Angular and leverage those frameworks deliver visually appealing and responsive web applications. On the back-end, I am proficient in building scalable and secure server-side solutions using Node.js and Express.js. I work with databases like MongoDB and PostgreSQL, designing efficient data models and implementing robust APIs for seamless front-end and back-end communication. In addition to my technical skills, I am well-versed in version control (Git), cloud deployment (AWS/Azure), and CI/CD pipelines. I collaborate effectively with cross-functional teams, adapt to Agile methodologies, and deliver high-quality solutions through iterative development.",
      date: "August 9, 2021",
      title: "Full Stack Developer",
      text1:
        "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      text2:
        "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      text3:
        "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    },
    {
      img: "assets/img/news/1.jpg",
      icon: "assets/img/svg/3d.svg",
      text: "As a software engineer, I am highly proficient in algorithms and data structures. I possess a deep understanding of various data structures, including arrays, linked lists, stacks, queues, trees, and graphs. This knowledge allows me to select the most appropriate data structure for efficient problem-solving. Additionally, I am well-versed in a wide range of algorithms such as sorting, searching, graph traversal, and dynamic programming. This expertise enables me to analyze, optimize, and design efficient solutions to complex problems. By leveraging my understanding of algorithms and data structures, I can enhance code performance, improve runtime efficiency, and deliver robust and scalable software solutions.",
      date: "August 9, 2021",
      title: "Data Structures and Algorithms",
      text1:
        "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      text2:
        "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      text3:
        "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    },
    {
      img: "assets/img/news/3.jpg",
      icon: "assets/img/svg/edu.svg",
      text: "As an expert technical writer, I possess strong technical knowledge and exceptional writing skills. I excel at distilling complex concepts into clear, concise documentation, including API guides, user manuals, and tutorials. With meticulous attention to detail and strong editing abilities, I ensure accuracy and readability. I collaborate effectively with subject matter experts and utilize various documentation tools, aiming to empower users and enhance their experience with software products.",
      date: "August 9, 2021",
      title: "Technical Writer",
      text1:
        "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      text2:
        "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      text3:
        "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    },

  ];

  const [isOpen7, setIsOpen7] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function toggleModalFour() {
    setIsOpen7(!isOpen7);
  }

  return (
    <Fragment>
      <SectionContainer className="cavani_tm_section" navName="service">
        <div className="section_inner">
          <div className="cavani_tm_service w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Services
              </span>
            </div>
            <div className="service_list w-full h-auto clear-both float-left mt-[60px]">
              <ul className="ml-[-50px] flex flex-wrap">
                {services.map((item, i) => (
                  <li className="mb-[50px] w-1/2 pl-[50px]" key={i}>
                    <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[#b9b8c3] border py-[70px] px-[40px] text-center transition-all duration-300 hover:bg-[#333]">
                      <img
                        className="svg inline-block w-[60px] h-[60px] text-[#333] mb-[27px] transition-all duration-300"
                        src={item.icon}
                        alt="image"
                      />
                      <h3 className="title font-medium text-[24px] text-[#333] mb-[15px] transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text transition-all duration-300">
                        {item.text}
                      </p>
                      <a
                        className="cavani_tm_full_link"
                    
                      />
                      {/* Modalbox Info Start */}
                      <img
                        className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                        src={item.img}
                        alt="image"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      {modalContent && (
        <Modal
          isOpen={isOpen7}
          onRequestClose={toggleModalFour}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}
          openTimeoutMS={300}
        >
          <div className="cavani_tm_modalbox opened">
            <div className="box_inner">
              <div className="close">
                <a href="#" onClick={toggleModalFour}>
                  <i className="icon-cancel" />
                </a>
              </div>
              <div className="description_wrap">
                <div className="service_popup_informations w-full h-auto clear-both float-left">
                  <div className="image">
                    <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                    <div
                      className="main"
                      data-img-url={modalContent.img}
                      style={{
                        backgroundImage: `url(${modalContent.img})`,
                      }}
                    />
                  </div>
                  <div className="main_title">
                    <h3>{modalContent.title}</h3>
                  </div>
                  <div className="descriptions w-full float-left">
                    <p className="mb-[15px]">{modalContent.text1}</p>
                    <p className="mb-[15px]">{modalContent.text2}</p>
                    <p>{modalContent.text3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};
export default Service;
