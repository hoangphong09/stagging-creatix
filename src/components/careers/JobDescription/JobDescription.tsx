"use client";

import { useParams, useRouter } from "next/navigation";

const JOBS = [
  {
    slug: "ai-researcher-applied-computer-vision",
    title: "AI Researcher – Applied Computer Vision (Junior/Mid/Senior)",
    location: "Long Biên, Hà Nội",
    type: "Làm việc trực tiếp, toàn thời gian (Full-time)",
    time: "Thứ 2 – Thứ 6, từ 9h00 đến 18h00",
    benefit: "Có cơm trưa tại văn phòng, trà chiều",
    description: [
      "Phát triển và tối ưu hoá các mô hình Computer Vision như object removal, background replacement, image enhancement, inpainting, segmentation.",
      "Triển khai pipeline inference trên GPU (RTX/A100) tối ưu cho cả mobile và cloud.",
      "Phối hợp với đội ngũ thiết kế và sản phẩm để đưa mô hình AI vào ứng dụng thực tế.",
      "Nghiên cứu, thử nghiệm các mô hình SOTA (Stable Diffusion, SAM, ControlNet, etc.).",
      "Đóng góp vào quy trình training, evaluation và deployment mô hình.",
    ],
    requirements: [
      "Thành thạo Python và các thư viện như PyTorch, OpenCV, Hugging Face, Transformers.",
      "Có kinh nghiệm làm việc với mô hình thị giác máy tính, đặc biệt là image generation, segmentation, hoặc enhancement.",
      "Hiểu biết về CUDA, TensorRT hoặc tối ưu hiệu suất inference là lợi thế.",
      "Khả năng đọc hiểu paper, tái hiện mô hình từ GitHub repo hoặc từ scratch.",
      "Ưu tiên ứng viên có sản phẩm thực tế hoặc đóng góp open source.",
    ],
    benefits: [
      "Mức lương: Thỏa thuận theo năng lực và kinh nghiệm.",
      "Thưởng dự án, lễ Tết, tháng lương thứ 13.",
      "Môi trường làm việc năng động, đồng đội giỏi, không quan liêu.",
      "Có cơ hội tiếp cận GPU hiệu năng cao (RTX 5090, A100) và làm việc với sản phẩm hàng triệu người dùng.",
      "Tham gia trực tiếp vào quá trình xây dựng sản phẩm AI sáng tạo mang tầm quốc tế.",
    ],
    apply: [
      "Gửi CV và portfolio (nếu có) về địa chỉ email: ",
      "Tiêu đề email: [AI Researcher – Họ tên]",
    ],
    applyEmail: "tuyendung@creatixtechnology.com",
    articles: [
      {
        title: "Ứng dụng Computer Vision trong sản phẩm thực tế",
        summary:
          "Khám phá cách AI và Computer Vision được ứng dụng để nâng cao trải nghiệm người dùng.",
        link: "#",
      },
      {
        title: "Công nghệ AI mới nhất tại Creatix",
        summary:
          "Tìm hiểu về các công nghệ AI tiên tiến mà Creatix đang phát triển.",
        link: "#",
      },
    ],
  },
  {
    slug: "ios-developer-mid-senior",
    title: "iOS Developer (Mid/Senior)",
    location: "Long Biên, Hà Nội",
    type: "Làm việc trực tiếp, toàn thời gian (Full-time)",
    time: "Thứ 2 – Thứ 6, từ 9h00 đến 18h00",
    benefit: "Có cơm trưa tại văn phòng, trà chiều",
    description: [
      "Phát triển ứng dụng iOS với Swift/SwiftUI.",
      "Tối ưu hiệu năng và trải nghiệm người dùng.",
      "Phối hợp với đội ngũ backend và thiết kế.",
      "Tham gia xây dựng và bảo trì các ứng dụng iOS hiện có.",
      "Nghiên cứu, áp dụng các công nghệ mới vào sản phẩm.",
    ],
    requirements: [
      "Thành thạo Swift, SwiftUI, UIKit.",
      "Có kinh nghiệm phát triển và phát hành ứng dụng lên App Store.",
      "Hiểu biết về RESTful API, JSON, Git.",
      "Có tư duy UI/UX tốt, khả năng làm việc nhóm.",
      "Ưu tiên ứng viên có kinh nghiệm với CoreML, ARKit hoặc các công nghệ mới của Apple.",
    ],
    benefits: [
      "Mức lương: Thỏa thuận theo năng lực và kinh nghiệm.",
      "Thưởng dự án, lễ Tết, tháng lương thứ 13.",
      "Môi trường làm việc sáng tạo, hỗ trợ phát triển cá nhân.",
      "Cơ hội tiếp cận các dự án lớn, sản phẩm thực tế.",
      "Tham gia trực tiếp vào quá trình xây dựng sản phẩm mobile sáng tạo.",
    ],
    apply: [
      "Gửi CV và portfolio (nếu có) về địa chỉ email: ",
      "Tiêu đề email: [iOS Developer – Họ tên]",
    ],
    applyEmail: "tuyendung@creatixtechnology.com",
    articles: [
      {
        title: "SwiftUI và xu hướng phát triển ứng dụng iOS hiện đại",
        summary: "Những công nghệ mới giúp tăng tốc phát triển ứng dụng iOS.",
        link: "#",
      },
    ],
  },
  {
    slug: "cong-tac-vien-mang-xa-hoi",
    title: "Cộng Tác Viên Mạng Xã Hội (TikTok/Facebook/Instagram/YouTube)",
    location: "Online hoặc tại Hà Nội (ưu tiên)",
    type: "Linh hoạt thời gian",
    time: "Thỏa thuận",
    benefit: "Linh hoạt, làm việc từ xa",
    description: [
      "Phát triển kênh TikTok, Facebook, Instagram hoặc YouTube cho ứng dụng chỉnh sửa ảnh/video AI (Magic Eraser...)",
      "Lên ý tưởng, quay/chỉnh video ngắn, demo tính năng app, trend content, tutorial, before-after, reaction,...",
      "Phối hợp với team marketing.",
      "Phối hợp với team thiết kế và sản phẩm để đưa ra nội dung hấp dẫn, đúng insight người dùng.",
      "Đăng bài định kỳ theo lịch và theo KPI (số lượng video/ngày hoặc view/tháng,...)",
    ],
    requirements: [
      "Hiểu và dùng tốt các nền tảng mạng xã hội: TikTok, Instagram Reels, Facebook Shorts, YouTube Shorts.",
      "Có kỹ năng quay dựng video ngắn bằng điện thoại hoặc phần mềm đơn giản.",
      "Yêu thích sáng tạo nội dung, bắt trend tốt.",
      "Ưu tiên ứng viên đã từng phát triển kênh riêng, làm KOC/creator hoặc có follower nhất định.",
    ],
    benefits: [
      "Thu nhập theo KPI (view, lượt tải app, số video,... hoặc thỏa thuận cố định).",
      "Có cơ hội trở thành nhân viên chính thức nếu làm tốt.",
      "Tham gia vào sản phẩm công nghệ có hàng triệu người dùng quốc tế.",
      "Môi trường làm việc thoải mái, không gò bó, tự do sáng tạo.",
    ],
    apply: [
      "Gửi CV về địa chỉ email: ",
      "Tiêu đề email: [CTV Mạng Xã Hội – Họ tên]",
    ],
    applyEmail: "tuyendung@creatixtechnology.com",
    articles: [
      {
        title: "Bí quyết xây dựng thương hiệu cá nhân trên mạng xã hội",
        summary:
          "Hướng dẫn phát triển hình ảnh cá nhân và tăng tương tác hiệu quả.",
        link: "#",
      },
    ],
  },
];

export default function JobDescriptionPage() {
  const { jobSlug } = useParams();
  const router = useRouter();
  const job = JOBS.find((j) => j.slug === jobSlug);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-xl">Không tìm thấy công việc này.</div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col items-center px-4 py-10">
        <div className="max-w-[60rem] w-full mx-auto">
          <button
            className="flex items-center gap-2 text-[#6366F1] font-bold mb-8"
            onClick={() => router.push("/careers")}
          >
            <span className="text-xl">&#8592;</span>
            <p className="hover:underline">Quay lại Tuyển dụng</p>
          </button>
          <h1 className="text-[42px] sm:text-[48px] font-bold text-creatix-gray-900 mb-6 leading-tight">
            {job.title}
          </h1>
          <div className="mb-8 space-y-1 text-lg">
            <div>Địa điểm: {job.location}</div>
            <div>Hình thức: {job.type}</div>
            <div>Thời gian làm việc: {job.time}</div>
            <div>Phúc lợi: {job.benefit}</div>
          </div>
          <SectionBlock title="Mô tả công việc" color="#8B5CF6">
            <ul className="list-disc pl-8 space-y-2 text-base">
              {job.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </SectionBlock>
          <SectionBlock title="Yêu cầu" color="#8B5CF6">
            <ul className="list-disc pl-8 space-y-2 text-base">
              {job.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </SectionBlock>
          <SectionBlock title="Quyền lợi" color="#8B5CF6">
            <ul className="list-disc pl-8 space-y-2 text-base">
              {job.benefits.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </SectionBlock>
          <SectionBlock title="Cách thức ứng tuyển" color="#8B5CF6">
            <div className="text-base space-y-2">
              <div>
                {job.apply[0]}
                <a
                  href={`mailto:${job.applyEmail}`}
                  className="text-[#6366F1] underline break-all"
                >
                  {job.applyEmail}
                </a>
              </div>
              <div>{job.apply[1]}</div>
            </div>
          </SectionBlock>
        </div>
      </main>
    </div>
  );
}

function SectionBlock({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <div
        className="text-xl font-bold mb-2 border-l-4 pl-3"
        style={{ borderColor: color }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}
