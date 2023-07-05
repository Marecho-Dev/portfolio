export const ContentCard = () => {
  return (
    <div className="w-80% bg-slate-3-- mx-[20%] flex h-[50%] pt-10">
      <div className="h-full w-1/2 bg-white">
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
      <div className="h-full w-1/3 flex-col">
        <div className="flex items-center justify-end pr-5 text-3xl">
          <h1>Manga Mood</h1>
        </div>
        <div className="mt-3 w-full bg-zinc-800 p-5 text-slate-200">
          Manga Mood is a full-stack SPA built using the T3 stack. It utilizes
          Machine Learning via a RESTful API in order to generate manga
          recommendations by comparing what you've rated on myanimelist to what
          other users have rated. If you don't have a myanimelist username,
          please use 'marecho' to test it out! Still a work in progress, but
          manga recommendations is functioning!
        </div>
        <div className="flex items-center justify-end gap-2  text-lg">
          <h1 className="mt-2 rounded-md bg-slate-600 px-2 py-1 text-slate-300">
            React
          </h1>
          <h1 className="mt-2 rounded-md bg-slate-600 px-2 py-1 text-slate-300">
            TypeScript
          </h1>
          <h1 className="mt-2 rounded-md bg-slate-600 px-2 py-1 text-slate-300">
            Tailwind
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
