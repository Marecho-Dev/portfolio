/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/no-unescaped-entities */
import { type NextPage } from "next";
import ContentCardLeft from "~/components/project-left";
import { ContentCardRight } from "~/components/project-right";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import type { FormikHelpers } from "formik";
import toast, { Toaster } from "react-hot-toast";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Home: NextPage = () => {
  const [isMoved, setIsMoved] = useState(false);
  const onSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<any>
  ) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
        values as unknown as Record<string, unknown>,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );
      resetForm();
      toast.success("Submitted, we'll get back to you ASAP!");
    } catch {
      toast.error(
        "Service is running into some issues, Please try again later."
      );
      resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("* Name field is required"),
      message: Yup.string()
        .min(2, "Too Short!")
        .max(250, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),
    onSubmit,
  });

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

  const personalPortfolio = {
    title: "Personal Portfolio",
    summary:
      "Personal portfolio which is built with React, TypeScript, and Tailwind. Uses the Formik and EmailJS libraries in order to handle contact form validation and submission. Hot-react-toast is used for error/success messages!",
    tech: ["React", "TypeScript", "Tailwind"],
    jpg: "/images/portfolio-pic-3.jpg",
    alternateJPG: "/images/portfolio-gif.gif",
  };
  const mangaMoodAPI = {
    title: "MAL REC Restful API",
    summary:
      "Restful API created using flask and python in order to perform machine learning on an input user to find mangas they will most likely connect with based on their historical rating on the site myanimelist.net",
    tech: ["Python", "Flask", "Pandas"],
    jpg: "/images/MM-API.jpg",
    alternateJPG: "",
  };

  const { ref: skillsSectionRef, inView: skillsInView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px 0px 0px", // Adjust root margin as needed
  });

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

  //this is to prevent hydration issues with <Toaster/>
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    //parent div
    <>
      {isClient ? <Toaster /> : "Prerendered"}
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
          className={`focus:box-shadow-none! focus:outline-none! focus:ring-0! absolute right-2 top-2 h-[5%] w-[15%] rounded-full ${
            isMoved ? "bg-slate-200" : "bg-slate-800"
          } md:h-[2%] md:w-[2%]`}
        >
          <div
            className={`ml-2 h-[60%] w-[30%] rounded-full  ${
              isMoved ? "ml-auto mr-2 bg-amber-400" : "bg-slate-200"
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
                    <a
                      href="https://www.autonation.com/reputation-award-winners"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @AutoNation
                    </a>
                  </span>
                  . Passionate about react, machine learning, music and manga.
                </p>
              </div>
              <div className="w-full flex-col items-center justify-center gap-2 pt-5">
                <div className="flex w-full justify-center gap-2 pt-5">
                  <button className="aspect-square h-10 w-10">
                    <a
                      href="https://github.com/Marecho-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 2"
                        className={` ${
                          isMoved
                            ? "fill-slate-50 stroke-slate-900"
                            : "stroke-slate-50"
                        }`}
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill-rule="evenodd"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M24 2.5a21.5 21.5 0 0 0-6.8 41.9c1.08.2 1.47-.46 1.47-1v-3.65c-6 1.3-7.24-2.88-7.24-2.88A5.7 5.7 0 0 0 9 33.68c-1.95-1.33.15-1.31.15-1.31a4.52 4.52 0 0 1 3.29 2.22c1.92 3.29 5 2.34 6.26 1.79a4.61 4.61 0 0 1 1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29 8.29 0 0 1 2.22-5.77 7.68 7.68 0 0 1 .21-5.69s1.8-.58 5.91 2.2a20.46 20.46 0 0 1 10.76 0c4.11-2.78 5.91-2.2 5.91-2.2a7.74 7.74 0 0 1 .21 5.69 8.28 8.28 0 0 1 2.21 5.77c0 8.26-5 10.07-9.81 10.61a5.12 5.12 0 0 1 1.46 4v5.9c0 .71.39 1.24 1.48 1A21.5 21.5 0 0 0 24 2.5"
                        />
                      </svg>
                    </a>
                  </button>
                  <button className="aspect-square h-10 w-10 ">
                    <a
                      href="https://www.linkedin.com/in/marekstaszkiewicz93/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {isMoved && (
                        <img
                          src={"../../../images/in-dark.svg"}
                          alt="Your SVG"
                        />
                      )}
                      {!isMoved && (
                        <img
                          src={"../../../images/in-light.svg"}
                          alt="Your SVG"
                        />
                      )}
                    </a>
                  </button>
                  <button className="flex aspect-square items-end ">
                    <a href="mailto:marekstaszkiewicz@live.com">
                      <svg
                        viewBox="0 0 48 48"
                        className={`h-10 w-10 ${
                          isMoved
                            ? "fill-slate-50 stroke-slate-900"
                            : "fill-slate-900 stroke-slate-50"
                        }`}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.47,10.71a2,2,0,0,0-2,2h0V35.32a2,2,0,0,0,2,2H41.53a2,2,0,0,0,2-2h0V12.68a2,2,0,0,0-2-2H6.47Zm33.21,3.82L24,26.07,8.32,14.53"
                        />
                      </svg>
                    </a>
                  </button>
                </div>
                <div className="flex w-full justify-center gap-2 pt-5">
                  <a
                    href="../../../images/marek_staszkiewicz_resume.pdf"
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
              <div className=" lg:w-[40%]">
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
                  Developer realm, I bring a unique set of skills and
                  experience. With a degree in statistics, I have a solid
                  foundation in data analytics and programming. I became
                  passionate about coding, and have since created and delivered
                  innovative solutions by merging data analysis with technology.
                  Throughout my career, I have embraced self-learning, and
                  constantly expanded my knowledge in various technologies. I
                  enjoy programming in React, TypeScript, and Python, and have
                  found myself capable of building scalable applications with
                  those languages. I love creating apps that curate content in
                  meaningful ways, and am always looking forward to learning new
                  methods and skills to do it. With my background in statistics
                  and passion for coding, I am excited to pursue my goal of
                  becoming a full stack engineer and continue to create
                  innovative applications that bridge the gap between data
                  analytics and user experiences.
                </p>
              </div>
              <div>
                <div className="grid-col-1 sm:gird-cols-3 mt-[5%] grid grid-cols-4 items-center justify-items-center gap-4 md:grid-cols-4 lg:grid-cols-10 3xl:grid-cols-10 3xl:gap-5">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className={`my-5 flex h-14 w-14 flex-col items-center justify-center 3xl:h-24 3xl:w-24 `}
                    >
                      <div>
                        {skill == "Flask" && isMoved && (
                          <img
                            ref={skillsSectionRef}
                            src={`../../../images/${skill}-dark.svg`}
                            alt={skill}
                            className={`${
                              skillsInView ? "animate-bounce" : ""
                            }`}
                          />
                        )}
                        {skill == "Flask" && !isMoved && (
                          <img
                            ref={skillsSectionRef}
                            src={`../../../images/${skill}-light.svg`}
                            alt={skill}
                            className={`${
                              skillsInView ? "animate-bounce" : ""
                            }`}
                          />
                        )}
                        {skill != "Flask" && (
                          <img
                            ref={skillsSectionRef}
                            src={`../../../images/${skill}.svg`}
                            alt={skill}
                            className={`${
                              skillsInView ? "animate-bounce" : ""
                            }`}
                          />
                        )}
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
              <ContentCardRight {...personalPortfolio} isMoved={isMoved} />
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
              <h1
                className={`pb-10 text-center text-6xl ${
                  isMoved ? "text-slate-900" : "text-rose-300"
                }`}
              >
                Get in touch.
              </h1>
              <form
                onSubmit={formik.handleSubmit}
                className="flex h-96 w-full flex-col items-center"
              >
                <input
                  placeholder="name"
                  id="name"
                  name="name"
                  className={` rounder-sm mb-10 w-full focus:border-2 ${
                    isMoved
                      ? "border border-rose-300 bg-slate-50 text-slate-900 outline-none"
                      : "bg-slate-200 text-slate-900"
                  } py-2 pl-2 text-lg md:w-1/3 `}
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={` rounder-sm mb-10 w-full outline-none focus:border-2 ${
                    isMoved
                      ? "border border-rose-300 bg-slate-50  text-slate-900"
                      : "bg-slate-200 text-slate-900"
                  } py-2 pl-2 text-lg md:w-1/3 `}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className={`text-md min-h-1/2 w-full resize-y rounded-sm outline-none focus:border-2 ${
                    isMoved
                      ? "border border-rose-300 bg-slate-50 text-slate-900"
                      : "bg-slate-200 text-slate-900"
                  }  py-2 pl-2 md:w-1/3`}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                ></textarea>

                <button
                  type="submit"
                  className={`mt-5 rounded-md ${
                    isMoved
                      ? "border border-rose-300 bg-slate-50 text-slate-900"
                      : "bg-rose-200 text-slate-700"
                  } px-2 py-2 md:w-[10%]`}
                >
                  Submit
                </button>
              </form>
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
                    <svg
                      version="1.1"
                      id="Layer_1"
                      viewBox="0 0 511.735 511.735"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path
                              className={`${
                                isMoved
                                  ? "fill-slate-900 stroke-slate-900"
                                  : "fill-slate-50 stroke-slate-50"
                              }`}
                              d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 C512.734,381.753,512.734,375.247,508.788,371.087z"
                            />{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 2"
                        className={`h-5 ${
                          isMoved
                            ? "fill-slate-50 stroke-slate-900"
                            : "stroke-slate-50"
                        }`}
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill-rule="evenodd"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M24 2.5a21.5 21.5 0 0 0-6.8 41.9c1.08.2 1.47-.46 1.47-1v-3.65c-6 1.3-7.24-2.88-7.24-2.88A5.7 5.7 0 0 0 9 33.68c-1.95-1.33.15-1.31.15-1.31a4.52 4.52 0 0 1 3.29 2.22c1.92 3.29 5 2.34 6.26 1.79a4.61 4.61 0 0 1 1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29 8.29 0 0 1 2.22-5.77 7.68 7.68 0 0 1 .21-5.69s1.8-.58 5.91 2.2a20.46 20.46 0 0 1 10.76 0c4.11-2.78 5.91-2.2 5.91-2.2a7.74 7.74 0 0 1 .21 5.69 8.28 8.28 0 0 1 2.21 5.77c0 8.26-5 10.07-9.81 10.61a5.12 5.12 0 0 1 1.46 4v5.9c0 .71.39 1.24 1.48 1A21.5 21.5 0 0 0 24 2.5"
                        />
                      </svg>
                    </a>
                  </button>
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
