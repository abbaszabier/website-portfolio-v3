import React from "react";

interface MaskedImageProps {
  mask: string;
  image: string;
}

const MaskedImage: React.FC<MaskedImageProps> = ({ mask, image }) => {
  return (
    <div className="sticky w-full h-[460px]">
      <img
        src={image}
        alt="Background"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          maskImage: `url(${mask})`,
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "right",
        }}
        className="absolute inset-0"
      />
    </div>
  );
};

export default MaskedImage;
