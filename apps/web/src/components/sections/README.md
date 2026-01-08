# OBJKTS Jewelry - Homepage Sections

Các component sections cho trang chủ OBJKTS Jewelry được xây dựng với Next.js 16.1.1 và Tailwind CSS.

## 📁 Cấu trúc thư mục

```
sections/
├── HeroSection.tsx              # Hero banner với CTA buttons
├── FeaturedCollections.tsx      # Collections nổi bật với grid layout
├── ShopByCategory.tsx           # Danh mục sản phẩm với circular images
├── BestSellers.tsx              # Sản phẩm bán chạy với hover effects
├── EngagementRingShowcase.tsx   # Showcase nhẫn đính hôn theo shape
├── Testimonials.tsx             # Đánh giá khách hàng với slider
├── Newsletter.tsx               # Email signup với social links
├── Footer.tsx                   # Footer với links và thông tin
└── index.ts                     # Export file
```

## 🎨 Các Section Components

### 1. **HeroSection** 
Hero banner toàn màn hình với:
- Background image với overlay
- Heading và tagline
- 2 CTA buttons (Shop New Arrivals & Engagement Rings)
- Scroll indicator animation

### 2. **FeaturedCollections**
Grid 4 cột hiển thị collections:
- Hover effect scale image
- Overlay gradient
- "Shop Now" link xuất hiện khi hover

### 3. **ShopByCategory**
Grid categories với circular images:
- 6 categories chính
- Hover effects
- Link "View All Collections"

### 4. **BestSellers**
Product showcase với:
- Grid 4 cột responsive
- Hover đổi hình ảnh sản phẩm
- Quick Add button
- Wishlist button
- Product badges (Bestseller, New, Sale)

### 5. **EngagementRingShowcase**
Section đặc biệt cho nhẫn đính hôn:
- Grid 8 diamond shapes
- Split layout: hình ảnh + nội dung
- Feature highlights với checkmarks
- 2 CTA buttons

### 6. **Testimonials**
Carousel đánh giá khách hàng:
- Auto-play slider (5s)
- Navigation arrows
- Dots indicator
- Trust badges (2,500+ reviews, 50K+ customers, etc.)

### 7. **Newsletter**
Email signup section với:
- Form đăng ký email
- 3 benefits columns
- Social media links (Instagram, Facebook, Pinterest, TikTok)
- Dark theme (bg-gray-900)

### 8. **Footer**
Footer đầy đủ với:
- 5 cột thông tin
- Payment methods icons
- Legal links
- Social media links
- Responsive layout

## 🚀 Cách sử dụng

### 1. Copy các file vào project

```bash
# Copy tất cả sections vào thư mục components
cp -r sections/ your-project/components/sections/
```

### 2. Import vào trang chủ

```tsx
// app/page.tsx hoặc pages/index.tsx
import {
  HeroSection,
  FeaturedCollections,
  ShopByCategory,
  BestSellers,
  EngagementRingShowcase,
  Testimonials,
  Newsletter,
  Footer
} from '@/components/sections';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedCollections />
      <ShopByCategory />
      <BestSellers />
      <EngagementRingShowcase />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
```

### 3. Import từng section riêng lẻ

```tsx
import HeroSection from '@/components/sections/HeroSection';
import BestSellers from '@/components/sections/BestSellers';

export default function CustomPage() {
  return (
    <>
      <HeroSection />
      <BestSellers />
    </>
  );
}
```

## 🖼️ Hình ảnh cần chuẩn bị

Tạo folder `public/images/` với cấu trúc:

```
public/images/
├── hero-banner.jpg                    # 1920x1080px
├── collections/
│   ├── trending.jpg                   # 600x800px
│   ├── travel-rings.jpg
│   ├── duo-set.jpg
│   └── mens.jpg
├── categories/
│   ├── rings.jpg                      # 400x400px
│   ├── bracelets.jpg
│   ├── necklaces.jpg
│   ├── earrings.jpg
│   └── bundles-sets.jpg
├── products/
│   ├── product-1.jpg                  # 600x600px
│   ├── product-1-hover.jpg
│   ├── product-2.jpg
│   ├── product-2-hover.jpg
│   └── ...
├── shapes/
│   ├── round.png                      # 200x200px (transparent)
│   ├── oval.png
│   ├── radiant.png
│   └── ...
├── engagement-feature.jpg             # 800x1000px
└── testimonials/
    ├── customer-1.jpg                 # 100x100px
    ├── customer-2.jpg
    └── ...
```

## ⚙️ Yêu cầu kỹ thuật

### Dependencies
```json
{
  "next": "16.1.1",
  "react": "^19",
  "react-dom": "^19",
  "tailwindcss": "^3.4"
}
```

### Tailwind Config
Không cần config đặc biệt, sử dụng Tailwind mặc định.

### Fonts
Components tự động load fonts từ Google Fonts:
- **Montserrat** (300, 400, 500) - Body text
- **Cormorant** (300, 400, 500) - Headings

## 🎯 Tính năng nổi bật

✅ **Responsive Design** - Mobile-first approach, hoạt động tốt trên mọi thiết bị

✅ **Performance** - Sử dụng Next.js Image component với lazy loading

✅ **Accessibility** - ARIA labels, semantic HTML, keyboard navigation

✅ **Animations** - Smooth transitions và hover effects

✅ **SEO Ready** - Semantic markup, proper heading hierarchy

✅ **Type Safe** - TypeScript support

## 🔧 Tùy chỉnh

### Màu sắc
Thay đổi trong các class Tailwind:
```tsx
// Đổi màu primary từ gray-900 sang blue-600
className="bg-gray-900" → className="bg-blue-600"
```

### Typography
Thay đổi fonts trong `<style jsx>`:
```tsx
<style jsx>{`
  @import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400&display=swap');
  
  section {
    font-family: 'YourFont', sans-serif;
  }
`}</style>
```

### Spacing
Điều chỉnh padding/margin:
```tsx
// Section spacing
className="py-16 md:py-24"  // Giảm: py-12 md:py-16
```

## 📱 Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (lg, xl, 2xl)

## 🐛 Lưu ý

1. **Images**: Cần chuẩn bị đầy đủ hình ảnh theo cấu trúc folder
2. **Links**: Cập nhật các href links cho phù hợp với routing của bạn
3. **API**: Newsletter form cần connect với email service (MailChimp, SendGrid, etc.)
4. **Cart**: Quick Add button cần logic thêm vào giỏ hàng
5. **State Management**: Có thể cần Redux/Zustand cho cart và wishlist

## 💡 Tips

- Sử dụng `next/image` với `placeholder="blur"` cho loading UX tốt hơn
- Implement skeleton loading cho các sections fetch data
- Add error boundaries cho production
- Optimize images với next-image-export-optimizer
- Sử dụng React.memo() cho các components không thay đổi thường xuyên

## 📄 License

Free to use for personal and commercial projects.

---

Được tạo bởi Claude - Inspired by OBJKTS Jewelry
