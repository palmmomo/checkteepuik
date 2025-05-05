import styles from "./page.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import View from "@/components/view";
import Howto from "@/components/Howto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.pageCustom}>
      <div className={styles.container}>
        <Header />
        <main className={styles.mainCustom}>
          <Hero />
          <View />
          <Howto />
        </main>
        <Footer />
      </div>
    </div>
  );
}
