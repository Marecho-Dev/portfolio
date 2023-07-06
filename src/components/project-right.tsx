import { useInView } from "react-intersection-observer";

type contentCard = {
  title: string;
  summary: string;
  tech: string[];
};

/* eslint-disable react/no-unescaped-entities */
export const ContentCardRight = (contentCard: contentCard) => {
  const { ref, inView } = useInView({
    threshold: 0, // Trigger when 20% of the card is visible
  });

  return (
    <div
      ref={ref}
      className={`w-80% transition-opacity duration-2000 ${
        inView ? "animate-slide-in-left opacity-100" : "opacity-0"
      } mx-[20%] flex h-[50vh] bg-slate-300 pt-10 font-mono`}
    >
      <div className="h-full w-[50%]">
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
      <div className="h-full w-1/2 flex-col 2xl:w-1/3">
        <div className="flex items-center justify-end pr-5 text-3xl">
          <h1>{contentCard.title}</h1>
        </div>
        <div className="mt-3 h-1/2 w-full bg-slate-800 p-5 text-slate-100">
          {contentCard.summary}
        </div>
        <div className="flex items-center justify-end gap-2  text-lg">
          {contentCard.tech.map((technology, index) => {
            return (
              <div key={index} className="px-2 py-1 text-slate-900">
                {technology}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContentCardRight;
