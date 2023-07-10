import { useInView } from "react-intersection-observer";

type contentCard = {
  title: string;
  summary: string;
  tech: string[];
  jpg: string;
  alternateJPG: string;
};

/* eslint-disable react/no-unescaped-entities */
export const ContentCardLeft = (contentCard: contentCard) => {
  const { ref, inView } = useInView({
    threshold: 0, // Trigger when 20% of the card is visible
  });

  return (
    <div
      ref={ref}
      className={`w-80% relative transition-opacity duration-2000 ${
        inView ? "animate-slide-in-right opacity-100" : "opacity-0"
      } mx-[20%] flex min-h-[50vh] flex-col justify-end pt-10 font-mono md:h-[50vh] md:flex-row`}
    >
      <div className="bottom-0 left-[0%] z-10 h-[100%] w-[100%] flex-col bg-slate-900 opacity-[.95] md:absolute lg:left-[5%] lg:top-20 lg:w-[60vh] lg:bg-inherit lg:opacity-100 2xl:w-1/3 3xl:right-[6%] 3xl:w-[60vh]">
        <div className="flex items-center justify-center pr-5 text-3xl text-slate-200 lg:justify-start">
          <h1>{contentCard.title}</h1>
        </div>
        <div className="mt-3 min-h-[30%] w-full overflow-auto p-5 text-xs text-slate-50 lg:bg-slate-200 lg:text-slate-900 2xl:text-base">
          {contentCard.summary}
        </div>
        <div className="flex items-center justify-center gap-2 text-lg  lg:justify-start">
          {contentCard.tech.map((technology, index) => {
            return (
              <div key={index} className="px-2 py-1 text-slate-200">
                {technology}
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-full md:w-[100vh] lg:w-1/2">
        <div className="relative h-full w-full rounded-sm">
          <img
            src={`${contentCard.jpg}`}
            alt={`${contentCard.title}`}
            className="h-full w-full object-cover"
          />
          {contentCard.alternateJPG != "" && (
            <img
              src={`${contentCard.alternateJPG}`}
              alt={`${contentCard.title + " alt"}`}
              className="absolute left-0 top-0 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentCardLeft;
