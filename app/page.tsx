import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Advantages } from "@/components/sections/advantages";
import { VideoSection } from "@/components/shared/video-section";
import { Services } from "@/components/sections/services";
import { Coverage } from "@/components/sections/coverage";
import { Simulator } from "@/components/sections/simulator";
import { Numbers } from "@/components/sections/numbers";
import { Testimonials } from "@/components/sections/testimonials";
import { Process } from "@/components/sections/process";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <VideoSection>
        <Hero />
        <About />
        <Advantages />
      </VideoSection>
      <Services />
      <Coverage />
      <Simulator />
      <Numbers />
      <Testimonials />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
}
