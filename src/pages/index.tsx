import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <>
      <header className="flex h-16 items-center justify-end bg-zinc-200 pr-5 text-slate-600">
        <nav>
          <ul className="flex gap-10">
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

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
          </div>
        </section>

        <section>
          <div className="mx-[20%] pt-10 ">
            <h1 className="pb-4 text-6xl  text-slate-600">Manga Mood</h1>
            <div className="flex h-80 w-[100%]">
              <div className="z-10 h-[90%] w-[50%]">
                <img
                  src="/images/Manga-Mood.jpg"
                  alt="Manga Mood"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="flex h-[100%] w-[50%] items-end">
                <p className="ml-[-10%] h-[90%] w-[120%] bg-slate-300 pl-[13%] text-slate-600">
                  Manga recommendation site built using the T3 stack
                </p>
              </div>
            </div>
          </div>
          <div className="mx-[20%] pt-10 ">
            <h1 className="pb-2 text-6xl  text-slate-600">
              Manga Rec Restful API
            </h1>
            <p className="text-slate-600">
              Restful API created using flask and python in order to perform
              machine learning on an input user to find mangas they should read
              next
            </p>
          </div>
          <div className="mx-[20%] pt-10 ">
            <h1 className="pb-2 text-6xl  text-slate-600">Metal General</h1>
            <p className="text-slate-600">
              ERP Built for the company Metal General which is built upon the T3
              stack using supabase
            </p>
          </div>
        </section>

        <section>
          {" "}
          <div className="mx-[20%] pt-10 ">
            <h1 className="pb-2 text-6xl  text-slate-600">Contact us</h1>
            <h2 className="pb-3 text-3xl text-slate-500">Name</h2>
            <p className="text-slate-600"></p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
