/* eslint-disable react/no-unescaped-entities */
import { type NextPage } from "next";
import ContentCardLeft from "~/components/project-left";
import { ContentCardRight } from "~/components/project-right";
import { useInView } from "react-intersection-observer";
import React, { useState } from "react";

const Home: NextPage = () => {
  const [isMoved, setIsMoved] = useState(false);
  const handleButtonClick = () => {
    setIsMoved(!isMoved);
  };

  const skills = [
    "MySQL",
    "Javascript",
    "React",
    "HTML",
    "CSS",
    "Tailwind",
    "TypeScript",
    "Node",
    "Python",
    "Flask",
  ];

  //below is a list of objects each representing a different project.
  const mangaMood = {
    title: "Manga Mood",
    summary:
      "Manga Mood is a full-stack SPA built using the T3 stack. It utilizes Machine Learning via a RESTful API in order to generate manga recommendations by comparing what you've rated on myanimelist to what other users have rated. If you don't have a myanimelist username, please use 'marecho' to test it out! Still a work in progress and I have long term plans for this project, but manga recommendations is functioning!",
    tech: ["React", "TypeScript", "Tailwind"],
    jpg: "/images/MM.jpg",
    alternateJPG: "/images/Animation.gif",
  };

  const metalGeneral = {
    title: "Metal General",
    summary:
      "ERP Built for the company Metal General which is built upon the T3 stack using supabase",
    tech: ["React", "TypeScript", "Tailwind"],
    jpg: "/images/metal-general.jpg",
    alternateJPG: "",
  };
  const mangaMoodAPI = {
    title: "MAL REC Restful API",
    summary:
      "Restful API created using flask and python in order to perform machine learning on an input user to find mangas they will most likely connect with based on their historical rating on the site myanimelist.net",
    tech: ["Python", "Flask", "Pandas"],
    jpg: "/images/MM-API.jpg",
    alternateJPG: "",
  };

  const { ref: aboutSectionRef, inView: aboutInView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px -300px 0px", // Adjust root margin as needed
  });

  const { ref: projectsSectionRef, inView: projectsInView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px -300px 0px", // Adjust root margin as needed
  });

  const { ref: contactSectionRef, inView: contactInView } = useInView({
    threshold: 0.2,
    rootMargin: "0px 0px -500px 0px", // Adjust root margin as needed
  });

  return (
    //parent div
    <div
      id="home"
      className={`relative h-screen font-mono text-slate-50 ${
        isMoved ? "bg-slate-50 text-slate-900" : "bg-slate-900"
      }`}
    >
      {/* absolute light/dark pill toggle */}
      <button
        onClick={handleButtonClick}
        style={{
          WebkitTapHighlightColor: "transparent",
        }}
        className="focus:box-shadow-none! focus:outline-none! focus:ring-0! absolute right-2 top-2 h-[5%] w-[15%] rounded-full bg-slate-800 md:h-[2%] md:w-[2%]"
      >
        <div
          className={`ml-2 h-[60%] w-[30%] rounded-full bg-slate-50 ${
            isMoved ? "ml-auto mr-2" : ""
          }`}
        ></div>
      </button>
      {/* fixed nav panel left side of page */}
      <div className="fixed left-0 hidden h-full lg:block  ">
        <div className="ml-5 flex h-full w-full items-center justify-center">
          <ul className="flex flex-col text-2xl">
            <li>
              <a
                href="#about"
                className={`flex ${
                  aboutInView || projectsInView
                    ? "font-medium shadow-slate-50 text-shadow-sm"
                    : "text-slate-200"
                } items-center`}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="h-5"></div>
                  <div
                    className={`h-3 w-3 rounded-full border ${
                      isMoved ? "border-slate-900 " : "border-slate-50"
                    } 
                    ${aboutInView && isMoved ? "bg-slate-900" : ""}
                    ${aboutInView && !isMoved ? "bg-slate-50" : ""}
                    `}
                  ></div>
                  <div
                    className={`h-5 border-l ${
                      isMoved ? "border-slate-900" : "border-slate-50"
                    } `}
                  ></div>
                </div>
                <div
                  className={`mt-1 w-5 border-t ${
                    isMoved ? "border-slate-900" : "border-slate-50"
                  }`}
                ></div>
                <span
                  className={`pl-1 ${
                    isMoved ? "text-slate-900" : "text-slate-50"
                  }`}
                >
                  About
                </span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`flex items-center ${
                  projectsInView && !contactInView && !isMoved
                    ? "text-3xl shadow-slate-50 text-shadow-sm"
                    : ""
                }
                ${
                  projectsInView && !contactInView && isMoved
                    ? "text-3xl shadow-slate-300 text-shadow-sm"
                    : ""
                }`}
              >
                <div className="flex flex-col items-center justify-center ">
                  <div
                    className={`h-5 border-l ${
                      isMoved ? "border-slate-900" : "border-slate-50"
                    }`}
                  ></div>
                  <div
                    className={`h-3 w-3 rounded-full border ${
                      isMoved ? "border-slate-900" : "border-slate-50"
                    } 
                      ${
                        projectsInView && !contactInView && isMoved
                          ? "bg-slate-900"
                          : ""
                      }
                      ${
                        projectsInView && !contactInView && !isMoved
                          ? "bg-slate-50"
                          : ""
                      }
                        `}
                  ></div>
                  <div
                    className={`h-5 border-l ${
                      isMoved ? " border-slate-900" : "border-slate-50"
                    } `}
                  ></div>
                </div>
                <div
                  className={`mt-1 w-5 border-t ${
                    isMoved ? "border-slate-900" : "border-slate-50"
                  }`}
                ></div>
                <span
                  className={`pl-1 ${
                    isMoved ? "text-slate-900 " : "text-slate-50}"
                  }`}
                >
                  Projects
                </span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`flex items-center ${
                  contactInView && !isMoved
                    ? "text-3xl shadow-slate-50 text-shadow-sm "
                    : ""
                }
                ${
                  contactInView && isMoved
                    ? "text-3xl  shadow-slate-300 text-shadow-sm"
                    : ""
                }`}
              >
                <div className="flex flex-col items-center justify-center">
                  <div
                    className={`h-5 border-l ${
                      isMoved ? "border-slate-900" : "border-slate-50"
                    }`}
                  ></div>
                  <div
                    className={`h-3 w-3 rounded-full border ${
                      isMoved ? "border-slate-900" : "border-slate-50"
                    } 
                    ${contactInView && isMoved ? "bg-slate-900" : ""}
                    ${contactInView && !isMoved ? "bg-slate-50" : ""}
                    `}
                  ></div>
                  <div className="h-5"></div>
                </div>
                <div
                  className={`mt-1 w-5 border-t ${
                    isMoved ? "border-slate-900" : "border-slate-50"
                  }`}
                ></div>
                <span
                  className={`pl-1 ${
                    isMoved ? "text-slate-900 " : "text-slate-50"
                  }`}
                >
                  Contact
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* first setion is the introduction with all my links */}
      <section className="flex h-full w-full items-center justify-center gap-10 text-center">
        <div className="flex justify-center">
          <div className="w-full flex-col items-center justify-center">
            <h1 className="px-1 pb-2 text-4xl  lg:text-9xl">Hi, I'm Marek</h1>
            <div className="flex items-center">
              <h2 className="animate-typewriter text-1xl m-auto overflow-hidden whitespace-nowrap pb-3 tracking-tighter  lg:text-6xl">
                <p>
                  Full Stack Developer
                  <span
                    className={`animate-blink-caret h-2/3 border ${
                      isMoved ? "border-slate-900" : "border-slate-50"
                    } text-4xl lg:h-full lg:border-2`}
                    style={{ height: "80%", marginTop: 0 }}
                  ></span>
                </p>
              </h2>
            </div>
            <div className="flex w-full items-center justify-center">
              <p className="w-100% px-3 text-center text-xs  lg:w-[60%]">
                Currently a Sr. Technology Analyst at{" "}
                <span
                  className={`${isMoved ? "text-pink-400" : "text-pink-200"}`}
                >
                  @AutoNation
                </span>
                . Passionate about react, machine learning, music and manga.
              </p>
            </div>
            <div className="w-full flex-col items-center justify-center gap-2 pt-5">
              <div className="flex w-full justify-center gap-2 pt-5">
                <button className="aspect-square h-10 w-10">
                  <a
                    href="https://github.com/mareks1993"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={"../../../images/github.svg"} alt="Your SVG" />
                  </a>
                </button>
                <button className="aspect-square h-10 w-10 ">
                  <a
                    href="https://www.linkedin.com/in/marek-staszkiewicz-022358123/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={"../../../images/in.svg"} alt="Your SVG" />
                  </a>
                </button>
                <button className="flex aspect-square h-10 w-10 items-end ">
                  <a href="mailto:marekstaszkiewicz@live.com">
                    <img src={"../../../images/mail.svg"} alt="Your SVG" />
                  </a>
                </button>
              </div>
              <div className="flex w-full justify-center gap-2 pt-5">
                <a
                  href="../../../images/Marek Staszkiewicz Resume.pdf"
                  download
                >
                  <button
                    className={`border ${
                      isMoved ? "border-slate-900" : "border-slate-50"
                    } px-2 py-1 `}
                  >
                    Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-inherit">
        <div
          id="about"
          ref={aboutSectionRef}
          className="flex w-full items-center gap-2 px-[18%] "
        >
          <div className="mt-5">01</div>
          <div className="text-2xl">About</div>
          <div
            className={`mt-1 w-full border-t ${
              isMoved ? "border-slate-900" : "border-slate-50"
            }`}
          ></div>
        </div>
        <section className="lg:w-50% flex w-full gap-10 lg:min-h-[80vh]  ">
          <div className="flex flex-col items-center">
            <div className=" w-full lg:w-[40%]">
              <h1
                className={`mt-[10%] pb-2 text-center text-3xl ${
                  isMoved ? "text-rose-400" : "text-rose-300"
                } lg:text-6xl 3xl:text-left`}
              >
                Marek Staszkiewicz
              </h1>
              <h2
                className={`pb-3 text-center text-lg ${
                  isMoved ? "text-slate-600" : "text-slate-300"
                } lg:text-3xl 3xl:text-left`}
              >
                Full Stack Developer
              </h2>
              <p className=" px-5  3xl:pr-24 3xl:text-left">
                As a Sr. Technology Analyst transitioning into the Full Stack
                Developer realm, I bring a unique set of skills and experience.
                With a degree in statistics, I have a solid foundation in data
                analytics and programming. I became passionate about coding, and
                have since created and delivered innovative solutions by merging
                data analysis with technology. Throughout my career, I have
                embraced self-learning, and constantly expanded my knowledge in
                various technologies. I enjoy programming in React, TypeScript,
                and Python, and have found myself capable of building scalable
                applications with those languages. I love creating apps that
                curate content in meaningful ways, and am always looking forward
                to learning new methods and skills to do it. With my background
                in statistics and passion for coding, I am excited to pursue my
                goal of becoming a full stack engineer and continue to create
                innovative applications that bridge the gap between data
                analytics and user experiences.
              </p>
            </div>
            <div>
              <div className="grid-col-1 sm:gird-cols-3 mt-[5%] grid grid-cols-4 items-center justify-items-center gap-4 md:grid-cols-4 lg:grid-cols-10 3xl:grid-cols-10 3xl:gap-5">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="my-5 flex h-14 w-14 flex-col items-center justify-center 3xl:h-24 3xl:w-24"
                  >
                    <div>
                      <img src={`../../../images/${skill}.svg`} alt={skill} />
                    </div>
                    <div className="text-center text-xs ">{skill}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div id="projects" ref={projectsSectionRef}>
          <div className="flex w-full items-center gap-2 px-[18%]">
            <div className="mt-5 ">02</div>
            <div className="text-2xl ">Projects</div>
            <div
              className={`mt-1 w-full border-t ${
                isMoved ? "border-slate-900" : "border-slate-50"
              }`}
            ></div>
          </div>
          <section className="mb-[10vh] min-h-screen w-full">
            {/* this next part is the project with card on right side */}
            <ContentCardRight {...mangaMood} isMoved={isMoved} />
            {/* this is project with card on left side */}
            <ContentCardLeft {...mangaMoodAPI} isMoved={isMoved} />
            {/* this is end of project with card on left side */}
            <ContentCardRight {...metalGeneral} isMoved={isMoved} />
            {/* this is end of project with card on right side */}
          </section>
        </div>
        <div
          id="contact"
          ref={contactSectionRef}
          className="flex w-full items-center gap-2 px-[18%] pt-10 "
        >
          <div className="mt-5">03</div>
          <div className="text-2xl">Contact</div>
          <div
            className={`mt-1 w-full border-t ${
              isMoved ? "border-slate-900" : "border-slate-50"
            }`}
          ></div>
        </div>
        <section className="w-full ">
          {" "}
          <div className="mx-[20%] pt-10 ">
            <h1 className="pb-10 text-center text-6xl text-rose-300">
              Get in touch.
            </h1>
            <div className="flex h-96 w-full flex-col items-center">
              <input
                placeholder="Name"
                className={` rounder-sm mb-10 w-full ${
                  isMoved
                    ? "bg-slate-600 text-slate-50"
                    : "bg-slate-200 text-slate-900"
                } py-2 pl-2 text-lg md:w-1/3 `}
                type="text"
              />
              <input
                placeholder="Email"
                className={` rounder-sm mb-10  w-full ${
                  isMoved
                    ? "bg-slate-600 text-slate-50"
                    : "bg-slate-200 text-slate-900"
                } py-2 pl-2 text-lg md:w-1/3 `}
                type="text"
              />
              <textarea
                placeholder="Message"
                className={`text-md min-h-1/2 w-full resize-y rounded-sm ${
                  isMoved
                    ? "bg-slate-600 text-slate-50"
                    : "bg-slate-200 text-slate-900"
                }  py-2 pl-2 md:w-1/3`}
              ></textarea>

              <button className="mt-5 w-[40%] rounded-md bg-rose-200 px-2 py-2 text-slate-700 md:w-[10%]">
                Submit
              </button>
            </div>
            <div className="h-24"></div>
          </div>
          <div className="flex h-[6%] w-full flex-col items-center justify-center gap-2">
            <div className="flex w-full items-center justify-center gap-3">
              {/* <div className="w-[30%] border-t"></div> */}
              <a href="#home">
                <button
                  className={`aspect-square h-8 w-8 rounded-full border ${
                    isMoved ? "border-slate-900" : "border-slate-50"
                  } px-2`}
                >
                  <img src={"../../../images/up-arrow.svg"} alt="Your SVG" />
                </button>
              </a>
              {/* <div className="w-[30%] border-t "></div> */}
            </div>
            <div className="flex items-center justify-center gap-2 text-center ">
              Made by Marek Staszkiewicz{" "}
              <span>
                <button className="flex aspect-square h-5 w-5 items-center">
                  <a
                    href="https://github.com/Mareks1993/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={"../../../images/github.svg"} alt="Your SVG" />
                  </a>
                </button>
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
