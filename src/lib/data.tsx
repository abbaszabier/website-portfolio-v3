import thumbnailDiyo from "../assets/thumbnailDiyo.webp";
import thumbnailSKT from "../assets/thumbnailSKT.webp";
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

const projectData = [
  {
    id: 1,
    title: "DIYO POS",
    type: "Real Project",
    isClient: "🇮🇩",
    description:
      "A point of sale application for restaurants and cafes built with React JS and Chakra UI.",
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
    title: "SKT Survey Link",
    type: "Real Project",
    isClient: "🇰🇷",
    description:
      "A survey link application for SKT built with React JS and Tailwind CSS.",
    imageUrl: thumbnailSKT,
    category: "react-js",
    techStack: ["Typescript", "React JS", "Tailwind CSS", "Zustand"],
    linkRepo: "https://gitlab.com/inkor-system/skt-suver-link",
    linkWeb: "https://gitlab.com/inkor-system/skt-suver-link",
    screenshots: [skt1, skt2, skt3, skt4, skt5, skt6],
  },
  {
    id: 3,
    title: "E-commerce Platform",
    type: "Real Project",
    isClient: "🇮🇩",
    description:
      "An e-commerce website developed using React.js and Zustand for state management.",
    imageUrl: "https://via.placeholder.com/300x200",
    category: "react-js",
    techStack: ["React JS", "React Query", "Tailwind CSS"],
    linkRepo: "https://x.com/abzabier_",
    linkWeb: "https://x.com/abzabier_",
    screenshots: [
      "https://via.placeholder.com/300x200",
      "https://via.placeholder.com/300x200",
      "https://via.placeholder.com/300x200",
    ],
  },
  {
    id: 4,
    title: "Portfolio Website",
    type: "Personal Project",
    isClient: null,
    description:
      "A responsive portfolio website created with React.js and Chakra UI.",
    imageUrl: "https://via.placeholder.com/300x200",
    category: "react-js",
    techStack: ["Next JS", "React Query", "Tailwind CSS"],
    linkRepo: "https://x.com/abzabier_",
    linkWeb: "https://x.com/abzabier_",
    screenshots: [
      "https://via.placeholder.com/300x200",
      "https://via.placeholder.com/300x200",
      "https://via.placeholder.com/300x200",
    ],
  },
  {
    id: 5,
    title: "Social Media App",
    type: "Real Project",
    isClient: "🇮🇩",
    description:
      "A social media application built with React.js and Firebase for backend services.",
    imageUrl: "https://via.placeholder.com/300x200",
    category: "react-js",
    techStack: ["Next JS", "React Query", "Tailwind CSS"],
    linkRepo: "https://x.com/abzabier_",
    linkWeb: "https://x.com/abzabier_",
    screenshots: [
      "https://via.placeholder.com/300x200",
      "https://via.placeholder.com/300x200",
      "https://via.placeholder.com/300x200",
    ],
  },
  {
    id: 6,
    title: "E-learning Platform",
    type: "Personal Project",
    isClient: null,
    description:
      "An online learning platform developed using Next JS and React Query for data fetching.",
    imageUrl: "https://via.placeholder.com/300x200",
    category: "next-js",
    techStack: ["Next JS", "React Query", "Tailwind CSS"],
    linkRepo: "https://x.com/abzabier_",
    linkWeb: "https://x.com/abzabier_",
    screenshots: [
      "https://via.placeholder.com/300x200",
      "https://via.placeholder.com/300x200",
      "https://via.placeholder.com/300x200",
    ],
  },
];

export default projectData;
