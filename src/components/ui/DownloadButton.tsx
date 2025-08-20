import React from 'react';
import { APP_CONFIG } from '@/constants';

interface DownloadButtonProps {
  platform: 'google-play' | 'app-store';
  className?: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ 
  platform, 
  className = '' 
}) => {

  
  const config = {
    'google-play': {
      icon: '/chplay.png',
      alt: 'Google Play',
      link: APP_CONFIG.links.googlePlay,
      text: {
        top: 'Get it on',
        bottom: 'Google Play',
      },
      bgColor: 'bg-white',
      textColor: 'text-[#0C0C0C]',
    },
    'app-store': {
      icon: '/app_store.png',
      alt: 'App Store',
      link: APP_CONFIG.links.appStore,
      text: {
        top: 'Download on the',
        bottom: 'App Store',
      },
      bgColor: 'bg-creatix-gray-900',
      textColor: 'text-white',
    },
  };

  const { icon, alt, link, text, bgColor, textColor } = config[platform];

  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div
      className={`flex items-center gap-3 ${bgColor} shadow-2xl px-4 py-3 rounded-xl hover:opacity-90 cursor-pointer transition-opacity ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <img
        src={icon}
        alt={alt}
        className="w-8 h-8"
        loading="lazy"
      />
      <div className={textColor}>
        <div className="text-sm font-semibold">{text.top}</div>
        <div className="text-lg font-bold">{text.bottom}</div>
      </div>
    </div>
  );
};
