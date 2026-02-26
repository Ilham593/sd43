import Hero from "../components/Hero";
import Stats from "../components/Stats";
import PrincipalSection from "../components/PrincipalSection";
import Programs from "../components/Programs";
import CTASection from "../components/CTASection";
import GalleryPreview from "./Kegiatan";
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <PrincipalSection />
      <Programs />
      <GalleryPreview />
      <CTASection />
    </>
  );
}
