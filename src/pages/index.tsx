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
        <section>{/* About section */}</section>

        <section>{/* Projects section */}</section>

        <section>{/* Contact section */}</section>
      </main>
    </>
  );
};

export default Home;
