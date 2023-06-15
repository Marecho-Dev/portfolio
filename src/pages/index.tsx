import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex h-14 items-center justify-end gap-10 bg-black pr-5 text-white">
        <div>About</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
    </>
  );
};

export default Home;
