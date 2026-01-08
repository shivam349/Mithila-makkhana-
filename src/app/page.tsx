import { HeroSection } from "@/components/HeroSection";
import { ProductGrid } from "@/components/ProductGrid";
import { CTASection } from "@/components/CTASection";
import { BlogList } from "@/components/BlogList";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="space-y-10 pb-20">
      <HeroSection />
      <ProductGrid />
      <CTASection />
      <BlogList />
      <Newsletter />
    </div>
  );
}
