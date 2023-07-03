/* eslint-disable react/no-unescaped-entities */
import { type NextPage } from "next";

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
  return (
    <div className="h-screen bg-slate-900">
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
              <button className="flex aspect-square h-10 w-10 items-end text-slate-500">
                <img src={"../../../images/mail2.svg"} alt="Your SVG" />
              </button>
              <button className="flex aspect-square h-10 w-10 items-end text-slate-500">
                <img src={"../../../images/resume.svg"} alt="Your SVG" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <main>
        <div className="flex w-full items-center gap-2 bg-slate-300 px-[18%]">
          <div className="mt-5">01</div>
          <div className="text-2xl">About</div>
          <div className="mt-1 w-full border-t border-gray-900"></div>
        </div>
        <section className="flex min-h-screen w-full gap-10 bg-slate-300">
          <div className="mx-[20%] pt-10 ">
            <h1 className="pb-2 text-6xl  text-slate-600">
              Marek Staszkiewicz
            </h1>
            <h2 className="pb-3 text-3xl text-slate-500">
              Full Stack Developer
            </h2>
            <p className="w-full text-slate-600 2xl:w-1/2">
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
            <h2 className="mt-20 mb-5 text-center text-3xl text-slate-900">
              Tech
            </h2>
            <div className="grid grid-cols-1 justify-items-center items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="my-5 flex h-24 w-24 flex-col items-center justify-center"
                >
                  <div>
                    <img src={`/public/images/${skill}.svg`} alt={skill} />
                  </div>
                  <div className="text-center">{skill}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="flex w-full items-center gap-2 bg-slate-300 px-[18%]">
          <div className="mt-5 text-slate-600">02</div>
          <div className="text-2xl">Projects</div>
          <div className="mt-1 w-full border-t border-gray-900"></div>
        </div>
        <section className="min-h-screen w-full bg-slate-300">
          {/* this next part is the project with card on right side */}
          <div className="w-80% bg-slate-3-- mx-[20%] flex h-[50%] pt-10">
            <div className="h-full w-1/2 bg-white">
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
            <div className="h-full w-1/3 flex-col">
              <div className="flex items-center justify-end pr-5 text-3xl">
                <h1>Manga Mood</h1>
              </div>
              <div className="mt-3 w-full bg-zinc-800 p-5 text-slate-200">
                Manga Mood is a full-stack SPA built using the T3 stack. It
                utilizes Machine Learning via a RESTful API in order to generate
                manga recommendations by comparing what you've rated on
                myanimelist to what other users have rated. If you don't have a
                myanimelist username, please use 'marecho' to test it out! Still
                a work in progress, but manga recommendations is functioning!
              </div>
              <div className="flex items-center justify-end gap-2  text-lg">
                <h1 className="mt-2 rounded-md bg-slate-600 px-2 py-1 text-slate-300">
                  React
                </h1>
                <h1 className="mt-2 rounded-md bg-slate-600 px-2 py-1 text-slate-300">
                  TypeScript
                </h1>
                <h1 className="mt-2 rounded-md bg-slate-600 px-2 py-1 text-slate-300">
                  Tailwind
                </h1>
              </div>
            </div>
          </div>
          {/* this is project with card on left side */}
          <div className="w-80% bg-slate-3-- mx-[20%] flex h-[50%] pt-10">
            <div className="h-full w-1/3 flex-col">
              <div className="flex items-center justify-end pr-5 text-3xl">
                <h1>Manga Rec Restful API</h1>
              </div>
              <div className="mt-3 h-1/2 w-full bg-zinc-800 p-5 text-slate-200">
                Restful API created using flask and python in order to perform
                machine learning on an input user to find mangas they should
                read next
              </div>
              <div className="flex items-center justify-end gap-2  text-lg">
                <h1 className="mt-2 rounded-md bg-slate-600 px-2 py-1 text-slate-300">
                  Pyton
                </h1>
                <h1 className="mt-2 rounded-md bg-slate-600 px-2 py-1 text-slate-300">
                  Flask
                </h1>
                <h1 className="mt-2 rounded-md bg-slate-600 px-2 py-1 text-slate-300">
                  Pandas
                </h1>
              </div>
            </div>
            <div className="h-full w-1/2 bg-white">
              <div className="h-full w-full rounded-sm">
                <img
                  src="/images/MM-API.jpg"
                  alt="Manga Mood"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* this is end of project with card on left side */}
          <div className="w-80% mx-[20%] flex h-[50%] flex-grow bg-slate-300 pt-10">
            <div className=" h-full w-1/2 bg-white">
              <div className="h-full w-full rounded-sm">
                <img
                  src="/images/metal-general.jpg"
                  alt="Manga Mood"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="h-full w-1/3 flex-col">
              <div className="flex items-center justify-end pr-5 text-3xl">
                <h1>Metal General</h1>
              </div>
              <div className="mt-3 h-1/2 w-full bg-zinc-800 p-5 text-slate-200">
                ERP Built for the company Metal General which is built upon the
                T3 stack using supabase
              </div>
              <div className="flex items-center justify-end gap-2  text-lg">
                <h1 className="mt-2 rounded-md bg-slate-600 px-2 py-1 text-slate-300">
                  React
                </h1>
                <h1 className="mt-2 rounded-md bg-slate-600 px-2 py-1 text-slate-300">
                  TypeScript
                </h1>
                <h1 className="mt-2 rounded-md bg-slate-600 px-2 py-1 text-slate-300">
                  Tailwind
                </h1>
              </div>
            </div>
          </div>
          {/* this is end of project with card on right side */}
        </section>
        <div className="flex w-full items-center gap-2 bg-slate-300 px-[18%] pt-10">
          <div className="mt-5">03</div>
          <div className="text-2xl">Contact</div>
          <div className="mt-1 w-full border-t border-gray-900"></div>
        </div>
        <section className="w-full bg-slate-300 ">
          {" "}
          <div className="mx-[20%] pt-10 ">
            <h1 className="pb-10 text-6xl  text-slate-600">Get in touch.</h1>
            <div className="flex h-96 w-full flex-col">
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

              <button className="mt-5 w-[10%] rounded-md bg-slate-500 px-2 py-2 text-slate-100">
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
