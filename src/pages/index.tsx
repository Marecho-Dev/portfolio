/* eslint-disable react/no-unescaped-entities */
import { type NextPage } from "next";
import ContentCardLeft from "~/components/project-left";
import { ContentCardRight } from "~/components/project-right";
import { useInView } from "react-intersection-observer";

const Home: NextPage = () => {
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
      "Manga Mood is a full-stack SPA built using the T3 stack. It utilizes Machine Learning via a RESTful API in order to generate manga recommendations by comparing what you've rated on myanimelist to what other users have rated. If you don't have a myanimelist username, please use 'marecho' to test it out! Still a work in progress and I have long term plans for this project, but manga reocmmendations if functioning",
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
    title: "Manga Mood Restful API",
    summary:
      "estful API created using flask and python in order to perform machine learning on an input user to find mangas they should read next",
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
    rootMargin: "-100px 0px -300px 0px", // Adjust root margin as needed
  });
  return (
    <div id="home" className="h-screen bg-slate-900 font-mono">
      {/* <header className="flex h-16 items-center justify-end bg-slate-600 pr-5 text-slate-100">
        <nav className="flex w-full">
          <div className="flex w-[30%] items-center gap-1 pl-5">
            <div>Marek Staszkiewicz</div>
          </div>
          <div className="flex w-full justify-end">
            <ul className="flex gap-5">
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </header> */}
      <div className="fixed left-0 hidden h-full lg:block  ">
        <div className="ml-5 flex h-full w-full items-center justify-center">
          <ul className="flex flex-col text-2xl text-slate-100">
            <li>
              <a
                href="#about"
                className={`flex ${
                  aboutInView
                    ? "font-medium text-slate-50 shadow-slate-50 text-shadow-sm"
                    : "text-slate-200"
                } items-center`}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="h-5"></div>
                  <div
                    className={`h-3 w-3 rounded-full border border-gray-100 ${
                      aboutInView ? "bg-slate-50" : ""
                    }`}
                  ></div>
                  <div className="h-5 border-l"></div>
                </div>
                <div className="mt-1 w-5 border-t border-gray-100"></div>
                <span className="pl-1">About</span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`flex items-center ${
                  projectsInView && !contactInView
                    ? "font-medium text-slate-50 shadow-slate-50 text-shadow-sm"
                    : "text-slate-200"
                }`}
              >
                <div className="flex flex-col items-center justify-center ">
                  <div className="h-5 border-l"></div>
                  <div
                    className={`h-3 w-3 rounded-full border border-gray-100 ${
                      projectsInView && !contactInView ? "bg-slate-50" : ""
                    }`}
                  ></div>
                  <div className="h-5 border-l"></div>
                </div>
                <div className="mt-1 w-5 border-t border-gray-100"></div>
                <span className="pl-1">Projects</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`flex items-center ${
                  contactInView
                    ? "font-medium text-slate-50 shadow-slate-50 text-shadow-sm"
                    : "text-slate-200"
                }`}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="h-5 border-l"></div>
                  <div
                    className={`h-3 w-3 rounded-full border border-gray-100 ${
                      contactInView ? "bg-slate-50" : ""
                    }`}
                  ></div>
                  <div className="h-5"></div>
                </div>
                <div className="mt-1 w-5 border-t border-gray-100"></div>
                <span className="pl-1">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section className="flex h-full w-full items-center justify-center gap-10 bg-slate-900 text-center">
        {/* <div className="ml-[20%] mt-[10%] h-[50%] w-[30%]">
          <img
            src="/images/Marek.jpg"
            alt="Manga Mood"
            className="h-full w-full object-cover"
          />
        </div> */}
        <div className="flex justify-center">
          <div className="w-full flex-col items-center justify-center">
            <h1 className="pb-2 text-9xl  text-slate-200">Hi, I'm Marek</h1>
            <div className="flex items-center">
              <h2 className="animate-typewriter m-auto overflow-hidden whitespace-nowrap pb-3 text-6xl tracking-tighter text-slate-100">
                <p>
                  Full Stack Developer
                  <span
                    className="animate-blink-caret h-full border-2 border-slate-100 text-4xl"
                    style={{ height: "80%", marginTop: 0 }}
                  ></span>
                </p>
              </h2>
            </div>
            <div className="flex w-full items-center justify-center">
              <p className="text-md text-md w-[60%] text-slate-100">
                Currently a Sr. Technology Analyst at{" "}
                <span className="text-pink-200">@AutoNation</span>. Passionate
                about react, machine learning, music and manga.
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
                    <img
                      src={"../../../images/github.svg"}
                      className="text-slate-100"
                      alt="Your SVG"
                    />
                  </a>
                </button>
                <button className="aspect-square h-10 w-10 text-slate-100">
                  <a
                    href="https://www.linkedin.com/in/marek-staszkiewicz-022358123/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={"../../../images/in.svg"} alt="Your SVG" />
                  </a>
                </button>
                <button className="flex aspect-square h-10 w-10 items-end text-slate-100">
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
                  <button className="border border-slate-100 px-2 py-1 text-slate-100">
                    Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        <div
          id="about"
          ref={aboutSectionRef}
          className="flex w-full items-center gap-2 bg-slate-900 px-[18%] text-slate-100"
        >
          <div className="mt-5">01</div>
          <div className="text-2xl">About</div>
          <div className="mt-1 w-full border-t border-slate-100"></div>
        </div>
        <section className="w-50% flex min-h-[80vh] gap-10 bg-slate-900 3xl:ml-[20%] ">
          <div className="flex flex-col items-center 3xl:flex-row  ">
            <div className="w-1/2">
              <h1 className="pb-2 text-center text-6xl text-rose-300 3xl:text-left">
                Marek Staszkiewicz
              </h1>
              <h2 className="pb-3 text-center text-3xl text-slate-300 3xl:text-left">
                Full Stack Developer
              </h2>
              <p className=" text-slate-100 3xl:pr-24 3xl:text-left">
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
              <div className="grid-col-1 sm:gird-cols-3 mt-[5%] grid grid-cols-10 items-center justify-items-center gap-4 md:grid-cols-4 3xl:grid-cols-4 3xl:gap-5">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="my-5 flex h-14 w-14 flex-col items-center justify-center 3xl:h-24 3xl:w-24"
                  >
                    <div>
                      <img src={`../../../images/${skill}.svg`} alt={skill} />
                    </div>
                    <div className="text-center text-xs text-slate-100">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div id="projects" ref={projectsSectionRef}>
          <div className="flex w-full items-center gap-2 bg-slate-900 px-[18%]">
            <div className="mt-5 text-slate-100">02</div>
            <div className="text-2xl text-slate-100">Projects</div>
            <div className="mt-1 w-full border-t border-slate-100"></div>
          </div>
          <section className="mb-[10vh] min-h-screen w-full bg-slate-900">
            {/* this next part is the project with card on right side */}
            <ContentCardRight {...mangaMood} />
            {/* this is project with card on left side */}
            <ContentCardLeft {...mangaMoodAPI} />
            {/* this is end of project with card on left side */}
            <ContentCardRight {...metalGeneral} />
            {/* this is end of project with card on right side */}
          </section>
        </div>
        <div
          id="contact"
          ref={contactSectionRef}
          className="flex w-full items-center gap-2 bg-slate-900 px-[18%] pt-10 text-slate-100"
        >
          <div className="mt-5">03</div>
          <div className="text-2xl">Contact</div>
          <div className="mt-1 w-full border-t border-slate-100"></div>
        </div>
        <section className="w-full bg-slate-900 ">
          {" "}
          <div className="mx-[20%] pt-10 ">
            <h1 className="pb-10 text-center text-6xl text-rose-300">
              Get in touch.
            </h1>
            <div className="flex h-96 w-full flex-col items-center">
              <input
                placeholder="Name"
                className=" rounder-sm mb-10 w-1/3 bg-slate-200 py-2 pl-2 text-lg "
                type="text"
              />
              <input
                placeholder="Email"
                className=" rounder-sm mb-10  w-1/3 bg-slate-200 py-2 pl-2 text-lg "
                type="text"
              />
              <textarea
                placeholder="Message"
                className="text-md min-h-1/2 w-1/3 resize-y rounded-sm bg-slate-200 py-2 pl-2"
              ></textarea>

              <button className="mt-5 w-[10%] rounded-md bg-rose-200 px-2 py-2 text-slate-700">
                Submit
              </button>
            </div>
            <div className="h-24"></div>
          </div>
        </section>
      </main>
      <div className="flex h-[6%] w-full flex-col items-center justify-center gap-2 bg-slate-900">
        <div className="flex w-full items-center justify-center gap-3">
          {/* <div className="w-[30%] border-t"></div> */}
          <a href="#home">
            <button className="aspect-square h-8 w-8 rounded-full border border-slate-100 px-2">
              <img src={"../../../images/up-arrow.svg"} alt="Your SVG" />
            </button>
          </a>
          {/* <div className="w-[30%] border-t "></div> */}
        </div>
        <div className="flex items-center justify-center gap-2 text-center text-slate-100">
          Made by Marek Staszkiewicz{" "}
          <span>
            <button className="flex aspect-square h-5 w-5 items-center">
              <a
                href="https://github.com/Mareks1993/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={"../../../images/github.svg"}
                  className="text-slate-100"
                  alt="Your SVG"
                />
              </a>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
