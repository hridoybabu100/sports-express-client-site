import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import PlayerPurchaseOffer from "@/components/PlayerPurchaseOfer";
import StartSection from "@/components/StarSection";


export default function Home() {
  return (
   <main>
    <Banner></Banner>
    <PlayerPurchaseOffer></PlayerPurchaseOffer>
    <Feature></Feature>
    <StartSection></StartSection>
   </main>
  );
}
