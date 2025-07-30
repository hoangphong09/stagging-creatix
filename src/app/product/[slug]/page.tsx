import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';

// Define product data structure
interface Product {
  slug: string;
  title: string;
  emoji: string;
  description: string;
  demoPlaceholder: string;
  features: { title: string; description: string }[];
  ctaText: string;
}

// Store product data (replace placeholders with actual content)
const products: Product[] = [
  {
    slug: 'ai-video-editor',
    title: 'AI Video Editor',
    emoji: '🎞️',
    description: 'Chỉnh sửa video chuyên nghiệp với các tính năng cắt ghép, thêm hiệu ứng, và cải thiện chất lượng được hỗ trợ bởi AI.',
    demoPlaceholder: 'Placeholder: Video Demo',
    features: [
      { title: 'Cắt cảnh thông minh', description: 'AI tự động phát hiện và đề xuất các đoạn cắt phù hợp.' },
      { title: 'Hiệu ứng AI độc đáo', description: 'Áp dụng các bộ lọc và hiệu ứng video sáng tạo được tạo bởi AI.' },
      { title: 'Nâng cấp chất lượng', description: 'Cải thiện độ phân giải, khử nhiễu và ổn định khung hình tự động.' },
    ],
    ctaText: 'Dùng thử AI Video Editor',
  },
  {
    slug: 'ai-portrait-creator',
    title: 'AI Portrait Creator',
    emoji: '🧑‍🎨',
    description: 'Tạo ra những bức chân dung nghệ thuật độc đáo từ ảnh của bạn hoặc từ mô tả văn bản bằng công nghệ AI.',
    demoPlaceholder: 'Placeholder: Image Gallery/Examples',
    features: [
      { title: 'Nhiều phong cách nghệ thuật', description: 'Chọn từ các phong cách đa dạng: tranh sơn dầu, hoạt hình, siêu thực,...' },
      { title: 'Tạo từ ảnh hoặc văn bản', description: 'Biến ảnh có sẵn thành tác phẩm hoặc mô tả ý tưởng để AI vẽ.' },
      { title: 'Tuỳ chỉnh linh hoạt', description: 'Điều chỉnh các yếu tố như màu sắc, chi tiết để đạt kết quả ưng ý.' },
    ],
    ctaText: 'Tạo chân dung AI ngay',
  },
  {
    slug: 'magic-eraser',
    title: 'Magic Eraser',
    emoji: '📱',
    description: 'Xoá bỏ vật thể không mong muốn hoặc thay đổi phông nền ảnh chỉ trong vài giây với sức mạnh AI.',
    demoPlaceholder: 'Placeholder: Video Demo / Ảnh Trước & Sau',
    features: [
      { title: 'Xoá vật thể thông minh', description: 'Chỉ cần đánh dấu khu vực cần xoá, AI sẽ tự động loại bỏ và tái tạo nền.' },
      { title: 'Thay đổi phông nền', description: 'Tách chủ thể khỏi nền và thay thế bằng nền mới hoặc làm mờ nền.' },
      { title: 'Kết quả tự nhiên', description: 'AI đảm bảo khu vực được chỉnh sửa hoà hợp với phần còn lại của ảnh.' },
    ],
    ctaText: 'Dùng thử Magic Eraser',
  },
];

// Function to get product data by slug
function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

// Generate static paths for pre-rendering
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate dynamic metadata
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.title} - Creatix Technology`,
    description: product.description,
  };
}

// Product Page Component
export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.slug);

  if (!product) {
    notFound(); // Show 404 page if product doesn't exist
  }

  return (
    <main>
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">{product.emoji} {product.title}</h1>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">{product.description}</p>

          {/* Demo/Examples */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-center">Xem {product.title} hoạt động</h2>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center text-gray-500">
              {product.demoPlaceholder}
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Tính năng chính</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.features.map((feature, index) => (
                <div key={index} className="text-center p-4">
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing (Placeholder) */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Bảng giá</h2>
            <div className="text-center text-gray-400">
              Thông tin bảng giá sẽ được cập nhật sớm.
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            {/* Link to the demo section on the homepage for now */}
            <Link href="/#demo" className="bg-ai-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 text-lg">
              {product.ctaText}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
