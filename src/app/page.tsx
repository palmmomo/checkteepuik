import styles from "./page.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import View from "@/components/view";
import Howto from "@/components/Howto";
import Footer from "@/components/Footer";
import Four from "@/components/four"
export default function Home() {
  return (
    <div className={styles.pageCustom}>
      <Header />
      <main className={styles.mainCustom}>
        <Hero />
        <View />
        <Howto /> 
        <Four />     
      </main>
      <Footer />
    </div>
  );
}
