import Image from "next/image";
import HeroSection from "./components/sections/HeroSection";
import TabSlider from "./components/sections/TabSlider";
import InstructorSection from "./components/sections/InstructorSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TabSlider />
      <InstructorSection />
    </main>
  );
}
