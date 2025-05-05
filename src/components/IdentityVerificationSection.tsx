import React from 'react';
import styles from '../app/page.module.css';

// Create a reusable CheckIcon component
const CheckIcon = () => (
  <svg viewBox="0 0 512 512" fill="#4CAF50" width="35" height="35">
    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
  </svg>
);

const IdentityVerificationSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        
        <h2>ยืนยันตัวตน ไม่เสียลูกค้าให้<br />มิจฉาชีพ</h2>

        {/* Icon Box for First Section */}
        <div className={styles.iconBox}>
          <div className={styles.icon}>
            <CheckIcon />
          </div>
          <div className={styles.content}>
            <h3>ยืนยันตัวตน สร้างเครดิตครั้งเดียว</h3>
            <p>
              หมดปัญหารอลูฏค้าแคปหน้าจอขอเครดิต แล้วไม่มีคนให้ในกลุ่ม ทั้งๆ ที่เราสุจริต
              สร้างโปรไฟล์ผู้ประกอบการจริง นายหน้าจริง ผ่านการยืนยันตัวตนแบบละเอียดกับเรา
              ยืนยันตัวตนครั้งเดียว ใช้ได้ตลอดไป
            </p>
          </div>
        </div>

        {/* Icon Box for Second Section */}
        <div className={styles.iconBox}>
          <div className={styles.icon}>
            <CheckIcon />
          </div>
          <div className={styles.content}>
            <h3>เพิ่มความน่าเชื่อถือให้มากขึ้น</h3>
            <p>
              หมดเคสลูกค้าไม่ไว้ใจเรา ไปจองกับมิจฉาชีพ แล้วกลับมาขอส่วนลด
              เพิ่มความน่าเชื่อถือให้โปรไฟล์มากกว่าที่ลูกค้าไว้ใจคนโกง
              ลงทะเบียนสร้างเครดิตกับเรา ถ้าคุณเป็นผู้ประกอบการจริง นายหน้าจริง
            </p>
          </div>
        </div>

        {/* Icon Box for Third Section */}
        <div className={styles.iconBox}>
          <div className={styles.icon}>
            <CheckIcon />
          </div>
          <div className={styles.content}>
            <h3>ลูกค้าบ้านได้จริง ไม่โดนโกง</h3>
            <p>
              ไม่รู้คนไหนโกง คนไหนจริง เดี๋ยวนี้เพจมิจฉาชีพน่าเชื่อถือมาก
              มีคอนเทนต์อัพเดทตลอดตรวจจับยากมาก หมดกังวลไปได้เลย
              เช็คเครดิตกับเราก่อนโอน เห็นโปรไฟล์ได้ทันทีคนไหนโกง คนไหนจริง
              จ่ายเงินแล้วต้องได้บ้านจริง
            </p>
          </div>
        </div>
      </div>

      {/* Image */}
      <img
        src="https://checkcredit-thailand.com/wp-content/uploads/2024/09/2148258842.jpg"
        alt="ยืนยันตัวตน"
        className={styles.image}
        width={1000}
        height={1500}
      />
    </div>
  );
};

export default IdentityVerificationSection;
