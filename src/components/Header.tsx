import Image from "next/image";
import styles from "../app/page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logoWrap}>
          <Image src="/images/logo.png" alt="CheckCredit Logo" width={180} height={60} />
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.active}>เช็คเครดิต</a>
          <a href="#">ร้องเรียนคนโกง</a>
          <a href="#">ติดต่อเรา</a>
        </nav>
        <div className={styles.headerBtns}>
          <button className={styles.loginBtn}>เข้าสู่ระบบ</button>
          <button className={styles.loginBtn}>ลงทะเบียน</button>
        </div>
      </div>
    </header>
  );
}
