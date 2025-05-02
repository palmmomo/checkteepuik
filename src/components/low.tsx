"use client";

import styles from "../app/page.module.css";

export default function Low() {
  return (
    <div className={styles["e-con-inner"]}>

      <div className={styles.heading}>
        <h2>โอนจองต้องเช็คเครดิตได้ ต้องได้บ้านจริง</h2>
      </div>

      <div className={styles["text-editor"]}>
        <p>เว็บกลางเช็คเครดิตที่พัก โรงแรม พูลวิลล่า รีสอร์ท</p>
      </div>

      <div className={styles["button-container"]}>
        <a className={styles.button} href="https://lin.ee/qF5rZ9Z" target="_blank" rel="noopener">
          <span className={styles.icon}>
            <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M272.1 204.2v71.1..."></path>
            </svg>
          </span>
          <span className={styles.text}>สอบถามรายละเอียด</span>
        </a>
      </div>

      <div className={styles["facebook-widget"]}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcheckcredit.th&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
              width="500"
              height="500"
              style={{ border: 'none', overflow: 'hidden' }}
              allowFullScreen={true}
              className="w-full"
            ></iframe>
          </div>

      </div>
      <div className={styles["button-container"]}>
        <a className={styles.button} href="https://checkcredit-thailand.com/credit/member/regis">
          <span className={styles.text}>ลงทะเบียนเครดิต</span>
        </a>
      </div>

      <div className={styles["shape-bottom"]}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
          <path className={styles["shape-fill"]} d="M0 0L2600 0 2600 69.1 0 0z"></path>
          <path className={`${styles["shape-fill"]} ${styles["opacity-50"]}`} d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
          <path className={`${styles["shape-fill"]} ${styles["opacity-25"]}`} d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
        </svg>
      </div>
      
    </div>

      

  );
}
