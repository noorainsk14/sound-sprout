import FeaturedCources from "@/components/FeaturedCources";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/MusicSchoolTestimonial"
import UpcomingWebinar from "@/components/UpcomingWebinar";
export default function Home() {
  return (
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCources/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinar/>
    </main>
  );
}
