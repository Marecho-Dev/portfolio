/* eslint-disable react/no-unescaped-entities */
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="h-full h-screen bg-slate-900">
      <header className="flex h-16 items-center justify-end bg-zinc-200 pr-5 text-slate-600">
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
      </header>
      <section className="flex h-full w-full gap-10 bg-slate-300">
        <div className="ml-[20%] mt-[10%] h-[50%] w-[30%]">
          <img
            src="/images/Marek.jpg"
            alt="Manga Mood"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mr-[20%] mt-[13%] flex">
          <div className="w-96 flex-col">
            <h1 className="pb-2 text-6xl  text-slate-600">Hi, I'm Marek</h1>
            <h2 className="pb-3 text-3xl text-slate-500">
              Full Stack Developer
            </h2>
            <p className="w-[100%] text-slate-600">
              Currently a Sr. Technology Analyst at AutoNation. Passionate about
              react, machine learning, music and manga.
            </p>
            <div className="flex w-[0%] gap-2 pt-5">
              <button className="aspect-square h-10 w-10 text-slate-500">
                <img src={"../../../images/github3.svg"} alt="Your SVG" />
              </button>
              <button className="aspect-square h-10 w-10 text-slate-500">
                <img src={"../../../images/linkedin.svg"} alt="Your SVG" />
              </button>
              <button className="flex items-end aspect-square h-10 w-10 text-slate-500">
                <img
                  src={"../../../images/mail2.svg"}
                  alt="Your SVG"
                />
              </button>
              <button className="flex items-end aspect-square h-10 w-10 text-slate-500">
                <img
                  src={"../../../images/resume.svg"}
                  alt="Your SVG"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section>
          <div className="mx-[20%] pt-10 ">
            <h1 className="pb-2 text-6xl  text-slate-600">
              Marek Staszkiewicz
            </h1>
            <h2 className="pb-3 text-3xl text-slate-500">
              Full Stack Developer
            </h2>
            <p className="text-slate-600">
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
              to learning new methods and skills to do it. With my background in
              statistics and passion for coding, I am excited to pursue my goal
              of becoming a full stack engineer and continue to create
              innovative applications that bridge the gap between data analytics
              and user experiences.
            </p>
            <div className="mt-[5%] w-full border-t border-gray-300"></div>
            <div className="flex gap-4">
              <div className="my-5 h-24 w-24 ">
                <img src={"../../../images/sql.svg"} alt="Your SVG" />
              </div>
              <div className="my-5 h-24 w-24 ">
                <img src={"../../../images/js.svg"} alt="Your SVG" />
              </div>
              <div className="my-5 h-24 w-24 ">
                <img src={"../../../images/react.svg"} alt="Your SVG" />
              </div>
              <div className="my-5 h-24 w-24 ">
                <img src={"../../../images/html.svg"} alt="Your SVG" />
              </div>
              <div className="my-5 h-24 w-24 ">
                <img src={"../../../images/css.svg"} alt="Your SVG" />
              </div>
              <div className="my-5 h-24 w-24 ">
                <img src={"../../../images/tailwind.svg"} alt="Your SVG" />
              </div>
              <div className="my-5 h-24 w-24 ">
                <img src={"../../../images/typescript.svg"} alt="Your SVG" />
              </div>
              <div className="my-5 h-24 w-24 ">
                <img src={"../../../images/node.svg"} alt="Your SVG" />
              </div>
            </div>
            <div className="w-full border-t border-gray-300"></div>
          </div>
        </section>

        <section>
          <div className="mx-[20%] pt-10 ">
            <h1 className="pb-4 text-6xl  text-slate-600">Manga Mood</h1>
            <div className="flex h-80 w-[100%]">
              <div className="z-10 h-[90%] w-[50%]">
                <div className="relative h-full w-full rounded-sm">
                  <img
                    src="/images/MM.jpg"
                    alt="Manga Mood"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/images/Animation.gif"
                    alt="Animated GIF"
                    className="absolute left-0 top-0 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <div className="flex h-[100%] w-[50%] items-end">
                <p className="ml-[-10%] h-[90%] w-[120%] rounded-sm bg-slate-300 pb-[5%] pl-[15%] pr-[5%] pt-[5%] text-slate-600">
                  Manga Mood is a full-stack SPA built using the T3 stack. It
                  utilizes Machine Learning via a RESTful API in order to
                  generate manga recommendations by comparing what you've rated
                  on myanimelist to what other users have rated. If you don't
                  have a myanimelist username, please use 'marecho' to test it
                  out! Still a work in progress, but manga recommendations is
                  functioning!
                </p>
              </div>
            </div>
          </div>
          <div className="mx-[20%] pt-10 ">
            <h1 className="pb-4 text-6xl  text-slate-600">
              Manga Rec Restful API
            </h1>
            <div className="flex h-80 w-[100%]">
              <div className="z-10 h-[90%] w-[50%]">
                <div className="relative h-full w-full rounded-sm">
                  <img
                    src="/images/MM-API.jpg"
                    alt="Manga Mood"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex h-[100%] w-[50%] items-end">
                <p className="ml-[-10%] h-[90%] w-[120%] rounded-sm bg-slate-300 pb-[5%] pl-[15%] pr-[5%] pt-[5%] text-slate-600">
                  Restful API created using flask and python in order to perform
                  machine learning on an input user to find mangas they should
                  read next
                </p>
              </div>
            </div>
          </div>
          <div className="mx-[20%] pt-10 ">
            <h1 className="pb-4 text-6xl  text-slate-600">Metal General</h1>
            <div className="flex h-80 w-[100%]">
              <div className="z-10 h-[90%] w-[50%]">
                <div className="relative h-full w-full rounded-sm">
                  <img
                    src="/images/metal-general.jpg"
                    alt="Manga Mood"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex h-[100%] w-[50%] items-end">
                <p className="ml-[-10%] h-[90%] w-[120%] rounded-sm bg-slate-300 pb-[5%] pl-[15%] pr-[5%] pt-[5%] text-slate-600">
                  ERP Built for the company Metal General which is built upon
                  the T3 stack using supabase
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          {" "}
          <div className="mx-[20%] pt-10 ">
            <h1 className="pb-5 text-6xl  text-slate-600">Get in touch.</h1>
            <div className="flex h-96 w-96 flex-col">
              <input
                placeholder="Name"
                className=" rounder-sm mb-10 h-full w-full bg-slate-200 py-5 pl-2 text-xl "
                type="text"
              />
              <input
                placeholder="Email"
                className=" rounder-sm mb-10 h-full w-full bg-slate-200 py-5 pl-2 text-xl "
                type="text"
              />
              <input
                placeholder="Message"
                className=" rounder-sm mb-10 h-full w-full bg-slate-200 py-5 pl-2 text-xl "
                type="textarea"
              />
              <button className="w-[25%] rounded-md bg-slate-500 py-3 text-slate-100">
                Submit
              </button>
            </div>
            <div className="h-24"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
