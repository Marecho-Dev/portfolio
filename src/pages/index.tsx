import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <>
      <header className="flex h-16 items-center justify-end bg-slate-900 pr-5 text-slate-400">
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
            <h1 className="pb-2 text-6xl  text-slate-400">
              Marek Staszkiewicz
            </h1>
            <h2 className="pb-3 text-3xl text-slate-50">
              Full Stack Developer
            </h2>
            <p className="text-slate-50">
              As a Sr. Technology Analyst transitioning into the Full Stack
              Developer world, I bring a unique blend of skills and experience.
              With a degree in statistics, I have a strong foundation in both
              data analytics and programming. I am passionate about coding and
              the possibilities that arise from merging data analysis with
              technology. Throughout my career, I have embraced self-learning,
              constantly expanding my knowledge in various technologies. My
              favorite languages, React, TypeScript and Python allow me to build
              dynamic and scalable applications. I have a deep appreciation for
              the process of curation, and I love creating apps that curate
              content in unique and meaningful ways. With my background in
              statistics and my passion for coding, I am excited to pursue my
              goal of becoming a full stack engineer and continue to create
              innovative applications that bridge the gap between data analytics
              and user experiences.
            </p>
          </div>
        </section>

        <section>{/* Projects section */}</section>

        <section>{/* Contact section */}</section>
      </main>
    </>
  );
};

export default Home;
