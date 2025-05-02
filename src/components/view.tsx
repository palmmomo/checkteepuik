import Image from "next/image";
import styles from "../app/page.module.css";

export default function View() {
  return (
    <div className={styles.viewContainer}>
      <div className={styles.viewBox}>
      </div>
      
      <div className={styles.certificationSection}>
        <div className={styles.certificationTitle}><strong>ได้รับการรับรองจาก:</strong></div>
        <div className={styles.footerIcons}>
          <a href="#" className={styles.socialIcon}><Image src="/images/1.png" alt="Social 1" width={24} height={24} /></a>
          <a href="#" className={styles.socialIcon}><Image src="/images/2.png" alt="Social 2" width={24} height={24} /></a>
          <a href="#" className={styles.socialIcon}><Image src="/images/3.png" alt="Social 3" width={24} height={24} /></a>
          <a href="#" className={styles.socialIcon}><Image src="/images/4.png" alt="Social 4" width={24} height={24} /></a>
          <a href="#" className={styles.socialIcon}><Image src="/images/5.png" alt="Social 5" width={24} height={24} /></a>
          <a href="#" className={styles.socialIcon}><Image src="/images/6.png" alt="Social 6" width={24} height={24} /></a>
          <a href="#" className={styles.socialIcon}><Image src="/images/7.png" alt="Social 7" width={24} height={24} /></a>
          <a href="#" className={styles.socialIcon}><Image src="/images/8.png" alt="Social 8" width={24} height={24} /></a>
          <a href="#" className={styles.socialIcon}><Image src="/images/9.png" alt="Social 9" width={24} height={24} /></a>
        </div>
      </div>
    </div>
  );
}