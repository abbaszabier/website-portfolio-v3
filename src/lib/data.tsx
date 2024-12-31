import { useTranslation } from "react-i18next";
import thumbnailDiyo from "../assets/thumbnailDiyo.webp";
import thumbnailSKT from "../assets/thumbnailSKT.webp";
import thumbnailChappy from "../assets/thumbnailChappy.webp";
import thumbnailGoFlights from "../assets/thumbnailGoflights.webp";
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
      isClient: "🇰🇷",
      description: t("portfolioPage.goFlights.Desc"),
      imageUrl: thumbnailGoFlights,
      category: "next-js",
      techStack: ["Typescript", "Next JS", "Tailwind CSS"],
      linkRepo: "https://gitlab.com/inkor-system/chappy",
      linkWeb: "https://gitlab.com/inkor-system/chappy",
      screenshots: [],
    },
  ];
};

export default useProjectData;
