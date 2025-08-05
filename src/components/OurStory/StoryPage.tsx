"use client";

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 pb-16 relative overflow-hidden">
      {/* Decorative objects */}
      <img
        src="/hire_yellow_shadow_image.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none select-none absolute left-[12rem] top-[0rem] w-[25vw] max-w-[700px] z-0"
      />
      <img
        src="/story_blur_3.png"
        alt="hand with heart"
        aria-hidden="true"
        loading="lazy"
        className="hidden sm:block pointer-events-none select-none absolute left-0 top-[5rem] sm:w-[15vw] lg:w-[20vw] max-w-[700px] z-0"
      />
      <img
        src="/story_blur_4.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none select-none absolute left-0 -bottom-16 w-[25vw] max-w-[700px] z-0"
      />
      <img
        src="/blog_left_obj.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none select-none absolute right-0 top-2 w-[25vw] max-w-[700px] z-0"
      />
      <img
        src="/story_blur_1.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="hidden sm:block pointer-events-none select-none absolute right-0 top-[36vw] w-[25vw] max-w-[700px] z-20"
      />

      {/* Main Title */}
      <div className="w-full max-w-5xl mx-auto text-center mt-32 mb-8 z-10 flex flex-col items-center justify-center gap-4">
        <h1 className="text-[62px] sm:text-[70px] font-extrabold text-creatix-gray-900 mb-2">
          “ Chúng tôi là Creatix ”
        </h1>
        <h2 className="text-[62px] sm:text-[64px] font-extrabold bg-gradient-primary bg-clip-text text-transparent mb-4">
          Nơi công nghệ gặp sáng tạo.
        </h2>
        <p className="text-[20px] text-gray-600 font-normal mb-6">
          “Mỗi dự án của chúng tôi đều bắt đầu từ sự thấu hiểu: thấu hiểu người
          dùng, nhu cầu, và những giá trị bạn cần được phát và bằng công nghệ
          linh hoạt và tư duy sáng tạo.”
        </p>
        <button className="bg-gradient-primary text-white font-semibold px-6 py-3 rounded-xl shadow hover:opacity-85 transition">
          Khám phá ngay !
        </button>
      </div>

      {/* About Us Section */}
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mt-20 items-center z-10">
        <div>
          <div className="text-[16px] text-[#635BFF] font-semibold mb-2 bg-[#635BFF0D] px-2 py-3 flex justify-center w-36 rounded-full">
            Chúng tôi là ai?
          </div>
          <h3 className="text-[48px] font-bold bg-gradient-to-r from-[#392F50] to-[#7344C8] bg-clip-text text-transparent mb-4">
            Về Chúng Tôi
          </h3>
          <p className="text-[22px] text-creatix-gray-900 mb-2">
            <b>"Creatix Technology</b> là công ty công nghệ tiên phong trong
            lĩnh vực Trí tuệ Nhân tạo (AI), chuyên cung cấp các sản phẩm và dịch
            vụ AI sáng tạo, giúp doanh nghiệp và cá nhân tối ưu hoá quy trình,
            nâng cao hiệu suất và mở ra những tiềm năng mới. Sứ mệnh của chúng
            tôi là đưa các giải pháp AI, mang công nghệ tiên tiến gần hơn với
            mọi người.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="/story_left_img.png"
              alt="Về Chúng Tôi"
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
              src="/story_right_img.png"
              alt="Văn hoá Creatix"
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
          <div className="text-[16px] text-[#635BFF] font-semibold mb-2 bg-[#635BFF0D] px-2 py-3 flex justify-center w-52 rounded-full">
            Văn hoá trong công ty
          </div>
          <h3 className="text-[48px] font-bold bg-gradient-to-r from-[#392F50] to-[#7344C8] bg-clip-text text-transparent mb-4">
            Văn hoá của chúng tôi
          </h3>
          <p className="text-[22px] text-creatix-gray-900 mb-2">
            "Tại <b>Creatix</b>, chúng tôi tôn vinh sự sáng tạo, đổi mới và tinh
            thần hợp tác. Chúng tôi xây dựng môi trường làm việc năng động, nơi
            mọi ý tưởng đều được lắng nghe và mọi thành viên đều có thể phát
            triển.
          </p>
        </div>
      </div>
    </div>
  );
}
