import { monaSans } from "@/viral/fonts";
import { ViralCases } from "./cases/ViralCases";
import { ClientLogos } from "./clients/ClientLogos";
import { Channels } from "./channels/Channels";
import { ViralEngine } from "./engine/ViralEngine";
import { ViralContact } from "./enquire/ViralContact";
import { ViralFaq } from "./faq/ViralFaq";
import { ViralFeed } from "./feed/ViralFeed";
import { ViralFooter } from "./ViralFooter";
import { ViralHero } from "./hero/ViralHero";
import { ViralLetterScene } from "./letter/ViralLetterScene";
import { ViralProcess } from "./process/ViralProcess";
import { ViralServicesScene } from "./services/ViralServicesScene";
import { ViralTestimonials } from "./testimonials/ViralTestimonials";

/* The Viral Digi Ventures homepage in the monz theme: the same components,
   type and scroll scenes, carrying the agency's services, approach, work
   and process in signal blue. Mona Sans is applied here (the root layout's body
   font is Arial); the black ground fills the rest of tall screens. */
export function ViralHome() {
  return (
    <>
      <main className={`${monaSans.className} flex-1 bg-black text-white`}>
        <ViralHero />
        <Channels />
        <ViralServicesScene />
        <ViralEngine />
        <ViralFeed />
        <ViralCases />
        <ViralProcess />
        <ClientLogos />
        <ViralTestimonials />
        <ViralFaq />
        <ViralContact />
        <ViralLetterScene />
      </main>
      <div className={monaSans.className}>
        <ViralFooter />
      </div>
    </>
  );
}
