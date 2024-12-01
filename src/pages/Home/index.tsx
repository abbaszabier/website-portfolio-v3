import { Helmet } from "react-helmet-async";
import Profile from "@/assets/profile.webp";
import SocialButton from "@/components/SosialButton.tsx";
import { Download, Mail } from "lucide-react";

function Home() {
  const phoneNumber = "6288211156895";
  const message =
    "Hi, my name is (type your name) from (type your country). I would like to hire you. Are you currently available?";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <Helmet>
        <title>Portfolio Abbas - Home</title>
      </Helmet>
      <div className="flex flex-col md:flex-row sm:justify-between xs:justify-center items-center h-[calc(100vh-10rem)] sm:px-12 xs:px-6 xs:pb-6">
        <div className="relative flex md:w-1/3 justify-center rounded-full shadow-lg bg-white dark:bg-[#051c29] items-center order-1 md:order-2 xs:mb-4">
          <img
            src={Profile}
            alt="Avatar"
            loading="lazy"
            width="384"
            height="384"
            className="w-60 xs:w-48 md:w-72 lg:w-80 xl:w-96 mx-auto transition duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div className="flex w-full md:w-1/2 flex-col gap-4 order-2 md:order-1">
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
            design, coffee, and music. I have a passion for creating beautiful
            and responsive websites.
          </p>
          <div className="flex flex-row gap-4 xs:gap-2 xs:flex-col xs:justify-center sm:justify-left items-center">
            <button
              onClick={() => {
                window.open(waLink, "_blank");
              }}
              className="relative mr-1 rounded-full inline-block font-semibold group p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shadow"
            >
              {/* Lapisan efek hover */}
              <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-[#051c29] dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-full"></span>

              {/* Lapisan utama dengan border */}
              <span className="absolute inset-0 w-full h-full bg-white dark:bg-[#051c29] border border-[#051c29] dark:border-white group-hover:bg-gray-100 dark:group-hover:bg-gray-800 rounded-full"></span>

              {/* Konten tombol */}
              <span className="relative text-[#051c29] dark:text-white">
                Hire Me
              </span>
            </button>

            <span className="text-[#051c29] xs:hidden dark:text-white">-</span>

            <div className="flex w-full space-x-2 xs:mt-2 xs:justify-center">
              <SocialButton
                icon={<Download size={14} />}
                label="Resume"
                href="/resume.pdf"
              />
              <SocialButton
                icon={<Mail size={14} />}
                label="Email"
                href="mailto:abbas.zabier06@gmail.com"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
