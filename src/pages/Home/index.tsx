import { useNavigate } from "react-router-dom";
import Profile from "@/assets/profile.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center h-[calc(100vh-10rem)] p-6">
      <div className="flex w-full md:w-1/2 flex-col justify-start gap-4">
        <h1 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[36px] 2xl:text-[48px] font-light text-gray-900 dark:text-gray-200 leading-snug">
          Hi!{" "}
          <span className="font-bold text-[#051c29] dark:text-white">
            I'm Abbas
          </span>
          , A <br />
          <span className="font-bold text-[#051c29] dark:text-white">
            FRONTEND DEVELOPER
          </span>{" "}
          🚀 <br /> Based In{" "}
          <span className="font-bold text-[#051c29] dark:text-white">
            INDONESIA
          </span>
        </h1>
        <p className="text-gray-500 font-normal dark:text-gray-400 mb-2 text-base">
          Welcome to my personal website 👋🏼. I'm a guy who loves to code,
          design, coffee, and music. I have a passion for creating beautiful and
          responsive websites.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/contact")}
            className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shadow bg-[#051c29] text-[#ffffff] font-semibold dark:bg-white dark:text-[#051c29] rounded-full"
          >
            Contact
          </button>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/abbas-ghofar-2b9b0b1b3/"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-[#051c29] dark:border-white p-2 rounded-full"
            >
              Tes
            </a>
            <a
              href="https://www.linkedin.com/in/abbas-ghofar-2b9b0b1b3/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in text-[#051c29] dark:text-white text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex w-1/2 md:w-1/3 justify-end items-center">
        <img
          src={Profile}
          alt="Avatar"
          className="sm:w-60 md:w-72 lg:w-80 xl:w-96 mx-auto rounded-full shadow-lg bg-white dark:bg-[#051c29]"
        />
      </div>
    </div>
  );
}

export default Home;
