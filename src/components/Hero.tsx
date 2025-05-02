import styles from "../app/page.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroSub}>เว็บกลางเช็คเครดิตที่พัก โรงแรม พูลวิลล่า รีสอร์ท</div>
      <h1 className={styles.heroTitle}>เช็คเครดิตก่อนโอน</h1>
      <div className={styles.heroDesc}>นายหน้า เจ้าของบ้านมีเครดิต รับประกัน</div>
      <div className={styles.heroSubDesc}>ลูกค้าต้องได้บ้านจริง ไม่โดนโกง ผู้ประกอบการสุจริต สามารถยืนยันตัวเองได้</div>
    </div>
  );
}
