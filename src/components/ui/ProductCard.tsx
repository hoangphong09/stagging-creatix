import React from "react";
import { ArrowRight } from "lucide-react";
import { Product } from "@/constants/product";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className = "",
}) => {
  const handleLearnMore = () => {
    window.open(product.link, "_blank");
  };

  return (
    <div
      className={`bg-white rounded-3xl hover:shadow-lg transition-shadow p-4 duration-300 overflow-hidden flex flex-col h-full ${className}`}
    >
      {/* Product Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-72 rounded-3xl object-contain"
          loading="lazy"
        />
      </div>

      {/* Product Content */}
      <div className="py-6 flex flex-col flex-grow">
        {/* Product Badge & Title */}
        <div className="space-y-4 flex-grow">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${product.badgeColor}`}
          >
            {product.logo ? (
              <img
                src={product.logo}
                alt="feature icon"
                className="w-8 h-8"
                loading="lazy"
              />
            ) : (
              <div className="w-8 h-8 bg-transparent"></div>
            )}
            <span
              className={`font-extrabold text-[20px] ${product.titleColor} font-inter tracking-[0.025px] leading-[100%]`}
            >
              {product.title}
            </span>
          </div>

          <p className="text-[16px] text-[#383838] leading-[25px] font-normal opacity-80 tracking-[0.25px] font-inter">
            {product.description}
          </p>
        </div>

        {/* Learn More Link */}
        <div
          className="flex items-center gap-2 text-creatix-primary font-semibold text-sm cursor-pointer hover:gap-3 transition-all mt-6"
          onClick={handleLearnMore}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleLearnMore();
            }
          }}
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
