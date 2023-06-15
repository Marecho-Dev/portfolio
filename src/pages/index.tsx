import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex h-14 items-center justify-end gap-10 bg-slate-900 pr-5 text-slate-400">
        <div>About</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
    </>
  );
};

export default Home;
