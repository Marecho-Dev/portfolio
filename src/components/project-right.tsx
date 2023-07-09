import { useInView } from "react-intersection-observer";

type contentCard = {
  title: string;
  summary: string;
  tech: string[];
  jpg: string;
  alternateJPG: string;
};

/* eslint-disable react/no-unescaped-entities */
export const ContentCardRight = (contentCard: contentCard) => {
  const { ref, inView } = useInView({
    threshold: 0, // Trigger when 20% of the card is visible
  });

  return (
    <div
      ref={ref}
      className={`w-80% relative transition-opacity duration-2000 ${
        inView ? "animate-slide-in-left opacity-100" : "opacity-0"
      } mx-[20%] flex h-[50vh]  pt-10 font-mono`}
    >
      <div className="h-full w-[50%]">
        <div className="relative h-full w-full">
          <img
            src={`${contentCard.jpg}`}
            alt={`${contentCard.title}`}
            className="h-full w-full object-cover"
          />
          {contentCard.alternateJPG != "" && (
            <img
              src={`${contentCard.alternateJPG}`}
              alt={`${contentCard.title + " alt"}`}
              className="absolute left-0 top-0  opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </div>
      </div>
      <div className="absolute right-[5%] h-[full] w-[60vh] flex-col 2xl:right-[20%] 2xl:w-1/3 3xl:right-[6%] 3xl:w-[60vh]">
        <div className="flex items-center justify-end pr-5 text-2xl text-slate-200 3xl:text-3xl">
          <h1>{contentCard.title}</h1>
        </div>
        <div className="mt-3 min-h-[30%] w-full bg-slate-200 p-5 text-xs text-slate-900 2xl:text-base">
          {contentCard.summary}
        </div>
        <div className="flex items-center justify-end gap-2  text-lg">
          {contentCard.tech.map((technology, index) => {
            return (
              <div key={index} className="px-2 py-1 text-slate-200">
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
