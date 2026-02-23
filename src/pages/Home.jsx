import Hero from "../components/Hero";
import Stats from "../components/Stats";
import PrincipalSection from "../components/PrincipalSection";
import Programs from "../components/Programs";
import GalleryPreview from "../components/GalleryPreview";
import CTASection from "../components/CTASection";
import NewsPreview from "../components/NewsPreview";
import PrestasiSection from "../components/PrestasiSection";
import TestimoniSection from "../components/TestimoniSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <PrincipalSection />
      <Programs />
      <GalleryPreview />
      <NewsPreview />
      <PrestasiSection />
      <TestimoniSection />
      <CTASection />
    </>
  );
}
