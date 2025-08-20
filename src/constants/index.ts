// Centralized constants for the entire application
export * from './product';
export * from './service';
export * from './post';
export * from './job';

// Common configuration
export const APP_CONFIG = {
  company: {
    name: 'Creatix Technology',
    email: 'admin@creatixtechnology.com',
    phone: '(+84) 817 991 996',
    description: 'Giải pháp AI tiên phong',
    longDescription: 'Creatix Technology cung cấp các giải pháp AI sáng tạo như AI Video Editor, AI Portrait Creator, Magic Eraser và các dịch vụ tư vấn AI.',
  },
  navigation: {
    mainMenu: [
      { name: 'About', id: 'intro-section', key: 'about' },
      { name: 'Products', id: 'product-section', key: 'products' },
      { name: 'Services', id: 'service-section', key: 'services' },
    ],
    secondaryMenu: [
      { href: '/careers', label: 'Careers', key: 'careers' },
      { href: '/blog', label: 'Blog', key: 'blog' },
      { href: '/our-story', label: 'Our Story', key: 'story' },
    ],
  },
  links: {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.duygiangdg.magiceraser',
    appStore: 'https://apps.apple.com/us/app/magic-eraser-remove-object/id1619950778',
  },
  languages: {
    supported: ['en', 'vi'],
    default: 'en',
  },
} as const;

// Common styles and classes
export const COMMON_STYLES = {
  gradients: {
    primary: 'bg-gradient-to-r from-[#392F50] to-[#7344C8]',
    secondary: 'bg-gradient-to-r from-[#571CEC] to-[#A96CF9]',
    purple: 'bg-gradient-to-r from-[#8D4AF7] to-[#6C53FE]',
    red: 'bg-gradient-to-r from-[#FF3838] to-[#FF3368]',
    redLight: 'bg-gradient-to-r from-[#FFECE3] to-[#FFE6EC]',
  },
  shadows: {
    card: 'shadow-lg hover:shadow-xl',
    button: 'shadow-2xl',
  },
  transitions: {
    default: 'transition-all duration-300',
    fast: 'transition-all duration-200',
    slow: 'transition-all duration-500',
  },
} as const;
