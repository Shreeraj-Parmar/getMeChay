export default function Home() {
  return (
    <>
      <div className="h-[44vh] flex flex-col gap-4 justify-center items-center text-white ">
        <div className="font-bold text-3xl flex justify-center items-center gap-2">
          Buy Me Chay
          <span>
            <img src="/chay.svg" width={44} alt="as" />
          </span>
        </div>
        <p className="text-lg">
          Croud funding platform, Lorem ipsum dolor sit amet, consectetur
          adipisicing elit.
        </p>
        <div className="">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start here
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-white opacity-10 h-1"></div>
    </>
  );
}
