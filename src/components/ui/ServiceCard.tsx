import React, { useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { Service } from "@/constants/service";
import { APP_CONFIG } from "@/constants";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = React.memo(
  ({ service, className = "" }) => {
    const IconComponent = React.useMemo(() => service.icon, [service.icon]);

    const handleDetails = useCallback(() => {
      window.location.href = `mailto:${APP_CONFIG.company.email}`;
    }, []);
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

        {/* Details Link (always visible) */}
        <div
          className="flex items-center gap-2 cursor-pointer bg-[#635BFF1A] rounded-[20px] px-4 py-1 w-fit"
          onClick={() => {
            handleDetails();
          }}
        >
          <span className="bg-gradient-to-r from-[#392F50] to-[#7344C8] bg-clip-text text-transparent leading-[25px] tracking-[0.025px] font-semibold font-inter text-[14px]">
            Details
          </span>
          <ArrowRight className="w-4 h-4 text-[#392F50] transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    );
  }
);
