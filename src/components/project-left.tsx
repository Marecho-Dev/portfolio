import { useInView } from "react-intersection-observer";
import React, { useRef, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

type contentCard = {
  title: string;
  summary: string;
  tech: string[];
  jpg: string;
  alternateJPG: string;
  isMoved: boolean;
  repo: string;
  live: string;
};

/* eslint-disable react/no-unescaped-entities */
export const ContentCardLeft = (contentCard: contentCard) => {
  const techContainerRef = useRef<HTMLDivElement>(null);
  const techContentRef = useRef<HTMLDivElement>(null);
  const [techOverflowing, setTechOverflowing] = useState(false);
  useEffect(() => {
    const container = techContainerRef.current;
    const content = techContentRef.current;

    if (container && content) {
      setTechOverflowing(content.scrollWidth > container.clientWidth);
    }
  }, [contentCard.tech]);

  const TechListContent = () => (
    <div ref={techContentRef} className="flex gap-2">
      {contentCard.tech.map((technology, index) => (
        <div
          key={index}
          className={`px-2 py-1 ${
            contentCard.isMoved ? "lg:text-slate-900" : "lg:text-slate-900"
          }`}
        >
          [{technology}]
        </div>
      ))}
    </div>
  );
  const { ref, inView } = useInView({
    threshold: 0, // Trigger when 20% of the card is visible
  });

  return (
    <div
      ref={ref}
      className={`w-80% relative transition-opacity duration-2000 ${
        inView ? "animate-slide-in-right opacity-100" : "opacity-0"
      } mx-[20%] flex grid min-h-[50vh] grid-cols-1 grid-rows-2 justify-end pt-10 font-mono md:flex md:h-[50vh] md:flex-row`}
    >
      <div
        className={` bottom-0 left-[0%] z-10 row-span-1 row-start-2 h-full w-[100%] flex-col border opacity-[.95] md:absolute md:border-none  lg:left-[5%] lg:top-20 lg:w-[60vh] lg:opacity-100 2xl:w-1/3 3xl:right-[6%] 3xl:w-[60vh] ${
          contentCard.isMoved ? "border-slate-900" : "border-slate-50"
        }`}
      >
        <div
          className={`text-md flex items-center justify-center pr-5 ${
            contentCard.isMoved ? "text-slate-900" : "text-slate-200"
          } md:text-3xl lg:justify-start`}
        >
          <h1>{contentCard.title}</h1>
        </div>
        <div
          className={`mt-3 min-h-[30%] w-full overflow-auto p-5 text-xs ${
            contentCard.isMoved
              ? "text-slate-900 lg:bg-slate-700 lg:text-slate-50"
              : "text-slate-50 lg:bg-slate-200 lg:text-slate-800 "
          } 2xl:text-base`}
        >
          {contentCard.summary}
          <div className="flex gap-2 text-blue-400">
            <button className="flex items-center gap-2">
              <a
                href={contentCard.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                [Repo]
              </a>
            </button>
            {contentCard.live && (
              <button className="flex items-center gap-2">
                <a
                  href={contentCard.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  [Live]
                </a>
              </button>
            )}
          </div>
        </div>
        <div
          ref={techContainerRef}
          className="align-center bottom-0 flex items-center gap-2 text-center text-xs md:text-lg   lg:justify-end lg:bg-slate-200"
        >
          {techOverflowing ? (
            <Marquee speed={50}>
              <TechListContent />
            </Marquee>
          ) : (
            <TechListContent />
          )}
        </div>
      </div>
      <div
        className={`row-span-1 row-start-1 h-full border md:w-[100vh] md:border-none lg:w-[70%] ${
          contentCard.isMoved ? "border-slate-900 " : "border-slate-50"
        }`}
      >
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
