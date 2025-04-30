import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageCustom}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logoWrap}>
            <Image src="/logo.png" alt="CheckCredit Logo" width={60} height={60} />
            <div className={styles.logoText}>
              <div className={styles.logoTitle}>CheckCredit</div>
              <div className={styles.logoSub}>THAILAND</div>
            </div>
          </div>
          <nav className={styles.nav}>
            <a href="#" className={styles.active}>เช็คเครดิต</a>
            <a href="#">ร้องเรียนคนโกง</a>
            <a href="#">ติดต่อเรา</a>
          </nav>
          <div className={styles.headerBtns}>
            <button className={styles.loginBtn}>เข้าสู่ระบบ</button>
            <button className={styles.registerBtn}>ลงทะเบียน</button>
          </div>
        </div>
      </header>
      <main className={styles.mainCustom}>
        <div className={styles.hero}>
          <div className={styles.heroSub}>เว็บกลางเช็คเครดิตที่พัก โรงแรม พูลวิลล่า รีสอร์ท</div>
          <h1 className={styles.heroTitle}>เช็คเครดิตก่อนโอน</h1>
          <div className={styles.heroDesc}><b>นายหน้า เจ้าของบ้านมีเครดิต รับประกัน</b></div>
          <div className={styles.heroSubDesc}>ลูกค้าต้องได้บ้านจริง ไม่โดนโกง ผู้ประกอบการสุจริต สามารถยืนยันตัวเองได้</div>
        </div>
        <div className={styles.searchBoxWrap}>
          <div className={styles.searchBox}>
            <input className={styles.searchInput} placeholder="ค้นหาชื่อ/เบอร์/บัญชีธนาคาร" />
            <button className={styles.searchBtn}>ค้นหา</button>
          </div>
        </div>
      </main>
      {/* Section: ขั้นตอนการลงทะเบียน */}
      <section className={styles.sectionStep}>
        <div className={styles.stepBox}>
          <div className={styles.stepTitle}>ขั้นตอนการ "ลงทะเบียนเครดิต"</div>
          <ul className={styles.stepList}>
            <li>✔ คลิก "ลงทะเบียน"</li>
            <li>✔ กรอกข้อมูลยืนยันผู้ใช้งาน</li>
            <li>✔ กรอกข้อมูลยืนยันที่พัก/บ้าน</li>
            <li>✔ รอผลตรวจสอบหลักฐาน 3-5 วัน</li>
            <li>✔ ได้รับการรับรองสถานะ</li>
          </ul>
        </div>
        <div className={styles.stepIcons}>
          <div className={styles.stepIconItem}>
            <Image src="/icon-doc.png" alt="รวมรวมหลักฐาน" width={80} height={80} />
            <div>รวบรวมหลักฐาน</div>
          </div>
          <div className={styles.stepIconItem}>
            <Image src="/icon-warning.png" alt="แจ้งคนโกง" width={80} height={80} />
            <div>แจ้งคนโกง</div>
          </div>
          <div className={styles.stepIconItem}>
            <Image src="/icon-verified.png" alt="เช็คบัญชีลงทะเบียน" width={80} height={80} />
            <div>เช็คบัญชีลงทะเบียน</div>
          </div>
        </div>
      </section>
      {/* Section: สถิติ */}
      <section className={styles.sectionStats}>
        <div className={styles.statsWrap}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>239,487</div>
            <div className={styles.statLabel}>ยอดเช็คคนโกง (ครั้ง)</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>4,568</div>
            <div className={styles.statLabel}>จำนวนลงทะเบียนเครดิต (ท่าน)</div>
          </div>
        </div>
      </section>
      {/* Section: จุดเด่นของเว็บ */}
      <section className={styles.sectionFeature}>
        <div className={styles.featureInner}>
          <div className={styles.featureImgWrap}>
            <Image src="/villa.jpg" alt="พูลวิลล่า" width={340} height={220} className={styles.featureImg} />
          </div>
          <div className={styles.featureContent}>
            <h2 className={styles.featureTitle}>เว็บกลางเช็คเครดิตที่พัก โรงแรม พูลวิลล่า รีสอร์ท</h2>
            <div className={styles.featureDesc}>
              เช็คเครดิตที่พัก/เครดิตดี เกิดจากประสบการณ์โดนโกง และไม่อยากให้ทุกคนโดนเหมือนกัน ก่อนโอนเงินให้เช็คกับเว็บนี้ก่อน!<br />
              <span style={{color:'#e53935', fontWeight:600}}>โอนแล้วที่พักให้จริงไหม?</span>
            </div>
            <ul className={styles.featureList}>
              <li>อยากจองบ้าน ต้องเช็คเครดิต เช็คชื่อ เบอร์ หรือเลขบัญชี ก่อนโอน เช็คได้</li>
              <li>ผู้ประกอบการสามารถลงทะเบียน มีเครดิตรับรอง เพิ่มยอดจองบ้าน ไม่เสียลูกค้าให้มิจฉาชีพ</li>
            </ul>
            <a href="#" className={styles.registerLink}>ลงทะเบียนเครดิต</a>
          </div>
        </div>
        <div className={styles.featureGrid}>
          <div className={styles.featureGridItem}>
            <div className={styles.featureGridNum}>01</div>
            <div className={styles.featureGridTitle}>โปรไฟล์รับรอง</div>
            <div className={styles.featureGridDesc}>มีเครดิตมีโปรไฟล์รับรอง สามารถให้ลูกค้าตรวจสอบเครดิต และโปรไฟล์ที่ผู้จองบ้านรับรอง ช่องทางติดต่อ และการยืนยันตัวตน</div>
          </div>
          <div className={styles.featureGridItem}>
            <div className={styles.featureGridNum}>02</div>
            <div className={styles.featureGridTitle}>ลงทะเบียนครั้งเดียว</div>
            <div className={styles.featureGridDesc}>ไม่เสียเวลาอีกต่อไป ไม่ต้องยื่นหลักฐานใหม่ทุกรอบ เพียงลงทะเบียนครั้งเดียว ผู้ประกอบการมีเครดิต</div>
          </div>
          <div className={styles.featureGridItem}>
            <div className={styles.featureGridNum}>03</div>
            <div className={styles.featureGridTitle}>ลูกค้าซื้อซ้ำ</div>
            <div className={styles.featureGridDesc}>เช็คเครดิตก่อนโอน ไม่เสียลูกค้าให้มิจฉาชีพ ลูกค้ากล้าตัดสินใจจองบ้านง่าย</div>
          </div>
        </div>
      </section>
      {/* Section: ยืนยันตัวตน */}
      <section className={styles.sectionVerify}>
        <div className={styles.verifyInner}>
          <div className={styles.verifyContent}>
            <h2 className={styles.verifyTitle}>ยืนยันตัวตน ไม่เสี่ยงลูกค้าให้มิจฉาชีพ</h2>
            <div className={styles.verifyList}>
              <div className={styles.verifyItem}>
                <div className={styles.verifyIcon}>✓</div>
                <div>
                  <div className={styles.verifyItemTitle}>ยืนยันตัวตน สร้างเครดิตครั้งเดียว</div>
                  <div className={styles.verifyItemDesc}>หมดปัญหาการถูกหลอก การตรวจสอบเครดิต เพียงแค่ยืนยันตัวตน ครั้งเดียว สร้างเครดิตให้ผู้ประกอบการที่ดี มีความน่าเชื่อถือ สามารถเช็คได้ก่อนโอน</div>
                </div>
              </div>
              <div className={styles.verifyItem}>
                <div className={styles.verifyIcon}>✓</div>
                <div>
                  <div className={styles.verifyItemTitle}>เพิ่มความน่าเชื่อถือให้บ้านคุณ</div>
                  <div className={styles.verifyItemDesc}>หมดปัญหาลูกค้าไม่กล้าจอง ไม่กล้าโอนมัดจำ เพิ่มความน่าเชื่อถือ เพิ่มยอดจอง บ้านที่มีเครดิตได้รับความไว้วางใจจากลูกค้า ผู้ประกอบการมีเครดิต มาตรฐานจริง</div>
                </div>
              </div>
              <div className={styles.verifyItem}>
                <div className={styles.verifyIcon}>✓</div>
                <div>
                  <div className={styles.verifyItemTitle}>ลูกค้าบ้านได้จริง ไม่โดนโกง</div>
                  <div className={styles.verifyItemDesc}>ไม่ผิดหวังอีกต่อไป หมดปัญหาลูกค้า เช็คเครดิตผู้ประกอบการได้ก่อนโอน มีเครดิตจาก ผู้ประกอบการตรวจสอบเครดิต หมดปัญหาโดนโกงเงินมัดจำ เพียงเช็คเครดิต จากเว็บไซต์ที่มีมาตรฐาน</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.verifyImage}>
            <Image 
              src="/verify-image.jpg" 
              alt="ยืนยันตัวตน" 
              width={500} 
              height={600} 
              className={styles.verifyImg}
            />
          </div>
        </div>
      </section>

      {/* Section: รีวิว */}
      <section className={styles.sectionReview}>
        <h2 className={styles.reviewTitle}>รีวิวจากสมาชิกผู้ใช้งานระบบ</h2>
        <div className={styles.reviewWrap}>
          <div className={styles.reviewItem}>
            <div className={styles.reviewQuote}>"</div>
            <div className={styles.reviewText}>
              หมดปัญหาการถูก หลอกโอนเงินมัดจำที่พัก ตั้งแต่มาลงทะเบียนที่นี่ได้รับการตอบรับที่ดีจากลูกค้า และได้ลูกค้าที่มีคุณภาพ ที่ต้องการบ้านจริง
            </div>
            <div className={styles.reviewUser}>
              <Image src="/user1.jpg" alt="ผู้ใช้งาน" width={40} height={40} className={styles.reviewUserImg} />
              <div>
                <div className={styles.reviewUserName}>คุณโรจน์ เจ้าของ Pool villa พัทยา</div>
                <div className={styles.reviewUserRole}>ผู้ประกอบการที่พัก</div>
              </div>
            </div>
          </div>
          <div className={styles.reviewItem}>
            <div className={styles.reviewQuote}>"</div>
            <div className={styles.reviewText}>
              ดีใจที่ได้มาเจอเว็บนี้ เว็บที่ให้ข้อมูลที่เป็นประโยชน์จริงๆ และช่วยให้เราได้ เช็คเครดิต ผู้ประกอบการก่อนการจองจริง ที่สำคัญมีเครดิตให้ตรวจสอบ เพราะผมเคยโดนมาแล้ว
            </div>
            <div className={styles.reviewUser}>
              <Image src="/user2.jpg" alt="ผู้ใช้งาน" width={40} height={40} className={styles.reviewUserImg} />
              <div>
                <div className={styles.reviewUserName}>คุณสมชาย รักษา</div>
                <div className={styles.reviewUserRole}>ผู้เช่าที่พักรายเดือน</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: โอนจอง */}
      <section className={styles.sectionCta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>โอนจองต้องเช็คเครดิตได้ ต้องได้บ้านจริง</h2>
          <div className={styles.ctaSubtitle}>ที่พักเราเช็คเครดิตได้ โรงแรม พูลวิลล่า รีสอร์ท</div>
          <div className={styles.ctaButtons}>
            <a href="#" className={styles.ctaButton}>ตรวจสอบเครดิต</a>
          </div>
          <div className={styles.ctaImageWrap}>
            <Image 
              src="/facebook-preview.jpg" 
              alt="Facebook Preview" 
              width={400} 
              height={400} 
              className={styles.ctaImage}
            />
            <div className={styles.ctaImageOverlay}>ลงทะเบียนเครดิต</div>
          </div>
        </div>
      </section>
      <div className={styles.bgImage}></div>
      <footer className={styles.footerCustom}>
        <div className={styles.footerText}>ได้รับการรับรองจาก:</div>
        <div className={styles.footerIcons}>
          {/* ตัวอย่างไอคอน สามารถเพิ่ม <Image src="/icon1.png" ... /> ได้ */}
          <span className={styles.iconCircle}></span>
          <span className={styles.iconCircle}></span>
          <span className={styles.iconCircle}></span>
        </div>
      </footer>
    </div>
  );
}
