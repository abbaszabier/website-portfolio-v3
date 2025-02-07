import { useTranslation } from "react-i18next";
import thumbnailDiyo from "../assets/thumbnailDiyo.webp";
import thumbnailSKT from "../assets/thumbnailSKT.webp";
import thumbnailChappy from "../assets/thumbnailChappy.webp";
import thumbnailGoFlights from "../assets/thumbnailGoflights.webp";
import thumbnailQuranKu from "../assets/thumbnailQuranKu.webp";
import diyo1 from "../image/diyo/ssDiyo1.webp";
import diyo2 from "../image/diyo/ssDiyo2.webp";
import diyo3 from "../image/diyo/ssDiyo3.webp";
import diyo4 from "../image/diyo/ssDiyo4.webp";
import diyo5 from "../image/diyo/ssDiyo5.webp";
import diyo6 from "../image/diyo/ssDiyo6.webp";
import diyo7 from "../image/diyo/ssDiyo7.webp";
import diyo8 from "../image/diyo/ssDiyo8.webp";
import diyo9 from "../image/diyo/ssDiyo9.webp";
import skt1 from "../image/SKT/ssSkt1.webp";
import skt2 from "../image/SKT/ssSkt2.webp";
import skt3 from "../image/SKT/ssSkt3.webp";
import skt4 from "../image/SKT/ssSkt4.webp";
import skt5 from "../image/SKT/ssSkt5.webp";
import skt6 from "../image/SKT/ssSkt6.webp";
import chappy1 from "../image/Chappy/ssChappy1.webp";
import chappy2 from "../image/Chappy/ssChappy2.webp";
import chappy3 from "../image/Chappy/ssChappy3.webp";
import chappy4 from "../image/Chappy/ssChappy4.webp";
import chappy5 from "../image/Chappy/ssChappy5.webp";
import chappy6 from "../image/Chappy/ssChappy6.webp";
import chappy7 from "../image/Chappy/ssChappy7.webp";
import chappy8 from "../image/Chappy/ssChappy8.webp";
import chappy9 from "../image/Chappy/ssChappy9.webp";
import chappy10 from "../image/Chappy/ssChappy10.webp";
import chappy11 from "../image/Chappy/ssChappy11.webp";
import chappy12 from "../image/Chappy/ssChappy12.webp";
import chappy13 from "../image/Chappy/ssChappy13.webp";
import chappy14 from "../image/Chappy/ssChappy14.webp";
import chappy15 from "../image/Chappy/ssChappy15.webp";
import goFlights1 from "../image/GoFlight/ssGoFlight1.webp";
import goFlights2 from "../image/GoFlight/ssGoFlight2.webp";
import goFlights3 from "../image/GoFlight/ssGoFlight3.webp";
import goFlights4 from "../image/GoFlight/ssGoFlight4.webp";
import goFlights5 from "../image/GoFlight/ssGoFlight5.webp";
import goFlights6 from "../image/GoFlight/ssGoFlight6.webp";
import goFlights7 from "../image/GoFlight/ssGoFlight7.webp";
import goFlights8 from "../image/GoFlight/ssGoFlight8.webp";
import goFlights9 from "../image/GoFlight/ssGoFlight9.webp";
import goFlights10 from "../image/GoFlight/ssGoFlight10.webp";
import goFlights11 from "../image/GoFlight/ssGoFlight11.webp";
import goFlights12 from "../image/GoFlight/ssGoFlight12.webp";
import quranKu1 from "../image/QuranKu/ssQuranKu1.webp";
import quranKu2 from "../image/QuranKu/ssQuranKu2.webp";
import quranKu3 from "../image/QuranKu/ssQuranKu3.webp";
import quranKu4 from "../image/QuranKu/ssQuranKu4.webp";

const useProjectData = () => {
  const { t } = useTranslation();
  return [
    {
      id: 1,
      title: t("portfolioPage.diyoPos.Title"),
      type: t("portfolioPage.diyoPos.Type"),
      isClient: "🇮🇩",
      description: t("portfolioPage.diyoPos.Desc"),
      imageUrl: thumbnailDiyo,
      category: "react-js",
      techStack: [
        "Typescript",
        "React JS",
        "Chakra UI",
        "React Query",
        "Zustand",
        "GraphQL",
        "Postman",
      ],
      linkRepo: "https://gitlab.com/",
      linkWeb: "https://pos.diyo.app/",
      screenshots: [
        diyo1,
        diyo2,
        diyo3,
        diyo4,
        diyo5,
        diyo6,
        diyo7,
        diyo8,
        diyo9,
      ],
    },
    {
      id: 2,
      title: t("portfolioPage.sktSurveyLink.Title"),
      type: t("portfolioPage.sktSurveyLink.Type"),
      isClient: "🇰🇷",
      description: t("portfolioPage.sktSurveyLink.Desc"),
      imageUrl: thumbnailSKT,
      category: "react-js",
      techStack: ["Typescript", "React JS", "Tailwind CSS", "Zustand"],
      linkRepo: "https://gitlab.com/inkor-system/skt-suver-link",
      linkWeb: "https://gitlab.com/inkor-system/skt-suver-link",
      screenshots: [skt1, skt2, skt3, skt4, skt5, skt6],
    },
    {
      id: 3,
      title: t("portfolioPage.chappy.Title"),
      type: t("portfolioPage.chappy.Type"),
      isClient: "🇰🇷",
      description: t("portfolioPage.chappy.Desc"),
      imageUrl: thumbnailChappy,
      category: "react-js",
      techStack: ["Typescript", "React JS", "Tailwind CSS", "Zustand"],
      linkRepo: "https://gitlab.com/inkor-system/chappy",
      linkWeb: "https://gitlab.com/inkor-system/chappy",
      screenshots: [
        chappy1,
        chappy2,
        chappy3,
        chappy4,
        chappy5,
        chappy6,
        chappy7,
        chappy8,
        chappy9,
        chappy10,
        chappy11,
        chappy12,
        chappy13,
        chappy14,
        chappy15,
      ],
    },
    {
      id: 4,
      title: t("portfolioPage.goFlights.Title"),
      type: t("portfolioPage.goFlights.Type"),
      isClient: null,
      description: t("portfolioPage.goFlights.Desc"),
      imageUrl: thumbnailGoFlights,
      category: "next-js",
      techStack: [
        "Typescript",
        "Next JS",
        "Tailwind CSS",
        "Supabase",
        "Prisma",
      ],
      linkRepo: "https://github.com/abbaszabier/next-flight",
      linkWeb: "https://github.com/abbaszabier/next-flight",
      screenshots: [
        goFlights1,
        goFlights2,
        goFlights3,
        goFlights4,
        goFlights5,
        goFlights6,
        goFlights7,
        goFlights8,
        goFlights9,
        goFlights10,
        goFlights11,
        goFlights12,
      ],
    },
    {
      id: 5,
      title: t("portfolioPage.quranKu.Title"),
      type: t("portfolioPage.quranKu.Type"),
      isClient: null,
      description: t("portfolioPage.quranKu.Desc"),
      imageUrl: thumbnailQuranKu,
      category: "next-js",
      techStack: ["Typescript", "Next JS", "Tailwind CSS", "Zustand"],
      linkRepo: "https://github.com/abbaszabier/next-myquran",
      linkWeb: "https://next-myquran.vercel.app/",
      screenshots: [quranKu1, quranKu2, quranKu3, quranKu4],
    },
  ];
};

export default useProjectData;
