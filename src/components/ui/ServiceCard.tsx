import React from "react";
import { ArrowRight } from "lucide-react";
import { Service } from "@/constants/service";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  className = "",
}) => {
  const IconComponent = service.icon;

  return (
    <div
      className={`bg-transparent rounded-2xl py-8 transition-shadow duration-300 space-y-6 group ${className}`}
    >
      {/* Icon */}
      <div
        className="w-15 h-15 bg-creatix-primary rounded-xl flex items-center justify-center font-thin"
        style={{ width: "60px", height: "60px" }}
      >
        <IconComponent className="w-10 h-10 text-white" strokeWidth={2} />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-creatix-gray-900">
          {service.title}
        </h3>
        <p className="text-sm text-creatix-gray-900 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Details Link (hover to show) */}
      <div className="max-h-0 overflow-hidden opacity-0 transform translate-y-2 group-hover:max-h-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out flex items-center gap-2 text-sm font-semibold cursor-pointer">
        <span className="bg-gradient-to-r from-[#571CEC] to-[#A96CF9] bg-clip-text text-transparent leading-tight">
          Details
        </span>
        <ArrowRight className="w-4 h-4 text-purple-600 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
};
