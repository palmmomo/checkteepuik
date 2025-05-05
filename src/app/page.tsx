import styles from "./page.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import View from "@/components/view";
import Howto from "@/components/Howto";
import Footer from "@/components/Footer";
import Box3 from "@/components/IdentityVerificationSection";
import IdentityVerificationSection from "@/components/IdentityVerificationSection";
import Low from "@/components/low"; 

export default function Home() {
  return (
    <div className={styles.pageCustom}>
      <Header />
      <main className={styles.mainCustom}>
        <Hero />
        <View />
        <Howto />
        <IdentityVerificationSection/>
        <Low />
      </main>
      <Footer />
    </div>
  );
}
