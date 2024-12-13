import { FC } from "react";

interface SocialButtonProps {
  icon: JSX.Element;
  label: string;
  href: string | undefined;
}

const SocialButton: FC<SocialButtonProps> = ({ icon, label, href }) => {
  return (
    <div className="group relative flex justify-center items-center">
      {/* Tooltip Desktop/Tablet */}
      <span className="xs:hidden absolute bottom-full mb-2 text-xs bg-[#051c29] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
        {label}
      </span>

      {/* Tombol */}
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group overflow-hidden rounded-full shadow dark:border-white text-[#051c29] dark:text-white 
          px-2 py-2 text-lg font-semibold  bg-white dark:bg-[#051c29]"
      >
        {/* Background animasi */}
        <span className="absolute inset-0 bg-[#051c29] dark:bg-white transition-transform duration-300 transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 rounded-full"></span>

        {/* Icon */}
        <span className="relative z-10 group-hover:text-white dark:group-hover:text-black">
          {icon}
        </span>
      </a>

      {/* Tooltip Mobile */}
      <span className="hidden xs:block absolute top-full mt-1 text-sm bg-[#051c29] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

export default SocialButton;
