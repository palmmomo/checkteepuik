import Image from "next/image";
import styles from "../app/page.module.css";

export default function Howto() {
  return (
    <section className={styles.howtoSection}>
      <div className={styles.howtoContentWrap}>
        <div className={styles.stepsBox}>
          <h2 className={styles.howtoTitle}>ขั้นตอนการ "ลงทะเบียนเครดิต"</h2>
          <div className={styles.howtoStepsList}>
            <div className={styles.howtoStep}>
              <div className={styles.stepCheck}>✓</div>
              <div className={styles.stepText}>คลิก "ลงทะเบียน"</div>
            </div>
            <div className={styles.howtoStep}>
              <div className={styles.stepCheck}>✓</div>
              <div className={styles.stepText}>กรอกข้อมูลยืนยันผู้ใช้งาน</div>
            </div>
            <div className={styles.howtoStep}>
              <div className={styles.stepCheck}>✓</div>
              <div className={styles.stepText}>กรอกข้อมูลยืนยันที่พัก/บ้าน</div>
            </div>
            <div className={styles.howtoStep}>
              <div className={styles.stepCheck}>✓</div>
              <div className={styles.stepText}>รอผลตรวจสอบหลักฐาน 3-5 วัน</div>
            </div>
            <div className={styles.howtoStep}>
              <div className={styles.stepCheck}>✓</div>
              <div className={styles.stepText}>ได้รับการรับรองสถานะ</div>
            </div>
          </div>
        </div>
        
        <div className={styles.iconsBox}>
          <div className={styles.howtoIcons}>
            <div className={styles.howtoIconItem}>
              <Image src="/images/howtoimg/1.png" alt="รวบรวมหลักฐาน" width={200} height={200} />
              <div>รวบรวมหลักฐาน</div>
            </div>
            <div className={styles.howtoIconItem}>
              <Image src="/images/howtoimg/2.png" alt="แจ้งคนโกง" width={200} height={200} />
              <div>แจ้งคนโกง</div>
            </div>
            <div className={styles.howtoIconItem}>
              <Image src="/images/howtoimg/3.png" alt="เช็คบัญชีลงทะเบียน" width={200} height={200} />
              <div>เช็คบัญชีลงทะเบียน</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>239,487</div>
          <div className={styles.statText}>ยอดเช็คคนโกง (ครั้ง)</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>4,568</div>
          <div className={styles.statText}>จำนวนลงทะเบียนเครดิต (ท่าน)</div>
        </div>
      </div>
    </section>
  );
}