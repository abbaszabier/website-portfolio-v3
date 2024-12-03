import { FC } from "react";

interface SocialButtonProps {
  icon: JSX.Element;
  label: string;
  href: string;
}

const SocialButton: FC<SocialButtonProps> = ({ icon, label, href }) => {
  return (
    <div className="group relative flex justify-center items-center">
      {/* Tooltip Desktop/Tablet */}
      <span className="xs:hidden absolute bottom-full mb-2 text-sm bg-[#051c29] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
        {label}
      </span>

      {/* Tombol */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group overflow-hidden rounded-full border
          border-[#051c29] dark:border-white text-[#051c29] dark:text-white 
          px-2 py-2 text-lg font-semibold transition duration-300"
      >
        {/* Background animasi */}
        <span className="absolute inset-0 bg-[#051c29] dark:bg-white transition-transform duration-300 transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 rounded-full"></span>

        {/* Icon */}
        <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition duration-200">
          {icon}
        </span>
      </a>

      {/* Tooltip Mobile */}
      <span className="hidden xs:block absolute top-full mt-1 text-sm bg-[#051c29] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
        {label}
      </span>
    </div>
  );
};

export default SocialButton;
