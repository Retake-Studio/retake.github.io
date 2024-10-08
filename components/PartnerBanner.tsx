import React from 'react';

interface PartnerBannerProps {
  imageUrl: string;
  altText?: string;
  height?: string;
  onClick?: () => void;
}

const PartnerBanner: React.FC<PartnerBannerProps> = ({ imageUrl, altText = 'Banner image', height = 'h-32', onClick }) => {
  return (
    <div 
      className={`w-full ${height} relative overflow-hidden rounded-2xl ${onClick ? 'cursor-pointer' : 'cursor-default'}`} // Utilisation de Tailwind pour le curseur
      onClick={onClick}
    >
      <img 
        src={imageUrl} 
        alt={altText}
        className="object-cover object-center w-full h-full"
      />
    </div>
  );
};

export default PartnerBanner;
