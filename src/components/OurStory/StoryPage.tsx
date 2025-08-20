"use client";

export default function StoryPage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 pb-16 relative overflow-hidden">
      {/* Decorative objects */}
      <img
        src="/hire_yellow_shadow_image.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none select-none absolute left-[12rem] top-[0rem] w-[25vw] max-w-[700px] z-0"
      />
      <img
        src="/story_blur_4.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none select-none absolute left-0 -bottom-16 w-[25vw] max-w-[700px] z-0"
      />

      <img
        src="/story_blur_1.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="hidden sm:block pointer-events-none select-none absolute right-0 top-[45vw] w-[21vw] max-w-[500px] z-20"
      />

      {/* Main Title */}
      <div className="w-full max-w-[90rem] mx-auto text-center mt-32 mb-8 z-10 flex flex-col items-center justify-center gap-4">
        <h1 className="text-[62px] sm:text-[70px] font-extrabold text-creatix-gray-900 mb-2 font-vietnam-pro">
          “ We are Creatix ”
        </h1>
        <h2 className="text-[62px] sm:text-[64px] font-extrabold bg-gradient-to-r from-[#392F50] to-[#7344C8] bg-clip-text text-transparent mb-4 font-vietnam-pro">
          Where technology meets creativity.
        </h2>
        <p className="text-[20px] text-[#383838] font-normal mb-6 w-2/3">
          "Every project starts with understanding—of users, needs, and the
          limits to be broken through flexible technology and creative
          thinking."
        </p>
        <button className="bg-gradient-primary text-white font-semibold px-6 py-3 rounded-xl shadow hover:opacity-85 transition">
          Discover now!
        </button>
      </div>

      {/* About Us Section */}
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mt-20 items-center z-10">
        <div>
          <div className="text-[14px] font-inter text-[#635BFF] font-semibold mb-2 bg-[#635BFF0D] px-2 py-3 flex justify-center w-36 rounded-full">
            Who are we?
          </div>
          <h3 className="text-[48px] font-extrabold bg-gradient-to-r from-[#392F50] to-[#7344C8] bg-clip-text text-transparent mb-4">
            About Us
          </h3>
          <p className="text-[18px] text-[#0C0C0C] mb-2 font-inter">
            <b>
              <i>" </i>Creatix Technology
            </b>{" "}
            is a technology company leading in the field of Artificial
            Intelligence (AI), specializing in providing creative AI products
            and services, helping businesses and individuals optimize processes,
            improve efficiency, and open up new opportunities. Our mission is to
            bring AI solutions, bringing advanced technology closer to everyone.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="/story_1.png"
              alt="About Us"
              className="rounded-2xl w-full max-w-[540px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Culture Section */}
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mt-20 items-center z-10">
        <div className="flex justify-center order-2 md:order-1">
          <div className="relative">
            <img
              src="/story_2.png"
              alt="Culture of Creatix"
              className="rounded-2xl w-full max-w-[540px] object-cover"
            />
            <img
              src="/story_blur_2.png"
              alt=""
              className="absolute -top-24 left-96 w-full z-10 max-w-[240px]"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="text-[14px] text-[#635BFF] font-semibold mb-2 bg-[#635BFF0D] px-2 py-3 flex justify-center w-52 rounded-full">
            Culture in the company
          </div>
          <h3 className="text-[48px] font-extrabold bg-gradient-to-r from-[#392F50] to-[#7344C8] bg-clip-text text-transparent mb-4">
            Culture of Creatix
          </h3>
          <p className="text-[18px] text-[#0C0C0C] mb-2">
            <i>" </i>At <b>Creatix</b>, we honor creativity, innovation, and
            collaboration. We build a dynamic work environment where every idea
            is heard and every member can develop.<i>"</i>
          </p>
        </div>
      </div>
    </div>
  );
}
