import TechSection from "@/components/TechSection";
import { Helmet } from "react-helmet-async";
import ProfileLogo from "@/assets/icon.webp";
import LogoUniversity from "@/assets/LogoUniversity.svg";
import LogoDealjava from "@/assets/LogoDealjava.png";
import LogoInkor from "@/assets/LogoInkor.png";

function About() {
  return (
    <>
      <Helmet>
        <title>Portfolio Abbas - About</title>
      </Helmet>
      <div className="mb-4">
        <div className="block text-center">
          <img
            src={ProfileLogo}
            alt="Avatar"
            loading="lazy"
            width="80"
            height="80"
            className="w-20 mx-auto rounded-full shadow bg-white dark:bg-[#051c29] p-2"
          />
        </div>
        <div className="flex w-full flex-col order-2 md:order-1 text-center">
          <h1 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[52px] font-normal text-gray-900 dark:text-gray-200 leading-snug">
            <span className="font-bold text-[#051c29] dark:text-white">
              About Me
            </span>
          </h1>
          <p className="text-gray-500 xs:leading-5 font-light dark:text-gray-400 xs:text-[12px] text-base">
            Discover Who I Am
          </p>
          <div className="flex w-full flex-col order-2 md:order-1 text-center">
            <p className="text-[#051c29] xs:leading-5 text-justify text-align-justify font-normal dark:text-gray-400 xs:text-[14px] text-[18px] xs:px-6 px-12 my-2">
              I am a Frontend Web Developer with over three years of
              professional experience. I specialize in creating responsive,
              interactive, and user-focused web applications using modern
              technologies such as React JS or Next JS. I have a proven track
              record of collaborating effectively with UI/UX designers and
              backend developers to deliver seamless and high-quality user
              experiences. Passionate about continuous learning, I actively
              engage in personal projects and stay updated with the latest
              industry trends to enhance my skills and contribute to innovative
              solutions.
            </p>
          </div>
        </div>
      </div>
      <TechSection />
      {/* Education Section */}
      <div className="mt-12 w-full xs:px-6 px-12">
        <div className="flex items-center justify-start w-full">
          <h1 className="text-[28px] font-normal text-gray-900 dark:text-gray-200 leading-snug">
            <span className="font-bold text-[#051c29] dark:text-white">
              Education
            </span>
          </h1>
        </div>
        <div className="mt-6 space-y-4">
          {/* Education Item */}
          <div className="w-full">
            <div className="flex items-start gap-2">
              <img src={LogoUniversity} alt="IPB" loading="lazy" />
              <div className="w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    IPB University
                  </h2>
                  <p className="text-sm text-gray-500 md:mt-0">
                    Sep 2018 - Apr 2023
                  </p>
                </div>
                <p className="text-sm text-gray-500"> Sarjana, Ilmu Komputer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="mt-12 w-full xs:px-6 px-12">
        <div className="flex items-center justify-start w-full">
          <h1 className="text-[28px] font-normal text-gray-900 dark:text-gray-200 leading-snug">
            <span className="font-bold text-[#051c29] dark:text-white">
              Work Experience
            </span>
          </h1>
        </div>
        <div className="mt-6 space-y-4">
          {/* Work Experience Items */}
          <div className="mt-6 flex flex-col border-b border-gray-200 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <img
                src={LogoInkor}
                width={50}
                height={50}
                alt="Inkor"
                loading="lazy"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                  Inkor
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Fulltime · Present
                </p>
              </div>
            </div>
            <div className="flex items-start relative left-5">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3"></div>
              <div className="w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h2 className="text-md font-semibold text-gray-800">
                    Frontend Developer
                  </h2>
                  <p className="text-sm text-gray-500 md:mt-0">
                    Aug 2024 - Present
                  </p>
                </div>
                <p className="text-sm text-gray-500">Sounth Jakarta · Remote</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col border-b border-gray-200 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <img
                src={LogoDealjava}
                width={50}
                height={50}
                alt="Dealjava"
                loading="lazy"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                  Dealjava
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Fulltime · 1 yr 5 mos
                </p>
              </div>
            </div>
            <div className="flex items-start relative left-5">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3"></div>
              <div className="w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h2 className="text-md font-semibold text-gray-800">
                    Frontend Developer
                  </h2>
                  <p className="text-sm text-gray-500 md:mt-0">
                    Mar 2023 - Jul 2024 · 1 yr 5 mos
                  </p>
                </div>
                <p className="text-sm text-gray-500">Medan · Remote</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col border-b border-gray-200 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <img src={LogoUniversity} alt="IPB" loading="lazy" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                  DSITD IPB
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Internship · 9 mos
                </p>
              </div>
            </div>
            <div className="flex items-start relative left-5">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3"></div>
              <div className="w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h2 className="text-mc font-semibold text-gray-800">
                    Frontend Developer
                  </h2>
                  <p className="text-sm text-gray-500 md:mt-0">
                    Jan 2023 - Mar 2023 · 3 mos
                  </p>
                </div>
                <p className="text-sm text-gray-500">Bogor · Remote</p>
              </div>
              <div
                className="absolute top-6 left-1 w-px bg-gray-300"
                style={{ height: "calc(86%)" }}
              ></div>
            </div>
            <div className="flex items-start mt-[13px] relative left-5">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3"></div>
              <div className="w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h2 className="text-md font-semibold text-gray-800">
                    Frontend Developer
                  </h2>
                  <p className="text-sm text-gray-500 md:mt-0">
                    Jan 2022 - Jul 2022 · 6 mos
                  </p>
                </div>
                <p className="text-sm text-gray-500">Bogor · Remote</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-12 xs:px-6 my-6 w-full flex justify-center items-center">
        <button className="relative bg-[#051c29] text-white hover:bg-white hover:text-[#051c29] dark:bg-white dark:text-[#051c29] dark:hover:bg-[#051c29] dark:hover:text-white rounded-lg inline-block font-semibold p-3 xs:p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shadow">
          Download Resume
        </button>
      </div>
    </>
  );
}

export default About;
