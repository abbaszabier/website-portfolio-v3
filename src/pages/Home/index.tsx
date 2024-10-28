import { useNavigate } from "react-router-dom";
import Profile from "@/assets/profile.webp";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row sm:justify-between xs:justify-center items-center h-[calc(100vh-10rem)] sm:px-12 xs:px-6 xs:pb-6">
      <div className="relative flex w-full md:w-1/3 justify-center items-center order-1 md:order-2 xs:mb-4">
        <img
          src={Profile}
          alt="Avatar"
          loading="lazy"
          width="384"
          height="384"
          className="w-60 xs:w-50 md:w-72 lg:w-80 xl:w-96 mx-auto rounded-full shadow-lg bg-white dark:bg-[#051c29]"
        />
      </div>
      <div className="flex w-full md:w-1/2 flex-col justify-start gap-4 order-2 md:order-1">
        <h1 className="text-[24px] xs:text-center sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[52px] font-light text-gray-900 dark:text-gray-200 leading-snug">
          Hi!{" "}
          <span className="font-bold text-[#051c29] dark:text-white">
            I'm Abbas
          </span>
          , A <br />
          <span className="font-bold text-[#051c29] dark:text-white">
            FRONTEND DEVELOPER
          </span>{" "}
          <br /> Based In{" "}
          <span className="font-bold text-[#051c29] dark:text-white">
            INDONESIA 🇮🇩
          </span>
        </h1>
        <p className="text-gray-500 xs:text-center font-normal dark:text-gray-400 mb-2 xs:text-[14px] text-base">
          Welcome to my personal website 👋🏼. I'm a guy who loves to code,
          design, coffee, and music. I have a passion for creating beautiful and
          responsive websites.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/contact")}
            className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shadow bg-[#051c29] text-[#ffffff] font-semibold dark:bg-white dark:text-[#051c29] rounded-full"
          >
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
