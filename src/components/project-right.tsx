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
export const ContentCardRight = (contentCard: contentCard) => {
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
        inView ? "animate-slide-in-left opacity-100" : "opacity-0"
      } mx-[20%] min-h-[50vh] flex-col pt-10 font-mono  md:flex md:h-[50vh]`}
    >
      <div
        className={`h-full border md:w-[100vh] md:border-none lg:w-[65%] ${
          contentCard.isMoved ? "border-slate-900" : "border-slate-50"
        }`}
      >
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
      <div
        className={`bottom-0 right-[0%] h-[full] w-[100%] flex-col border ${
          contentCard.isMoved ? "border-slate-900" : "border-slate-50"
        } opacity-[.95] md:right-[0%] md:border-none lg:absolute lg:right-[5%] lg:top-20 lg:w-[60vh] lg:bg-inherit lg:opacity-100 2xl:right-[20%] 2xl:w-1/3 3xl:right-[6%] 3xl:w-[60vh]`}
      >
        <div
          className={`flex items-center justify-center pr-5  text-lg ${
            contentCard.isMoved ? "text-slate-800" : "text-slate-200"
          } md:text-2xl lg:justify-end 3xl:text-3xl`}
        >
          <h1>{contentCard.title}</h1>
        </div>
        <div
          className={`mt-3 w-full overflow-auto p-5 text-xs ${
            contentCard.isMoved
              ? " text-slate-900 lg:bg-slate-700 lg:text-slate-50"
              : "text-slate-50 lg:bg-slate-200 lg:text-slate-800"
          } lg:max-h-[65%]   2xl:text-base`}
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
          className="flex items-center justify-center gap-2 text-xs md:text-lg  lg:justify-end lg:bg-slate-200"
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
    </div>
  );
};

export default ContentCardRight;
