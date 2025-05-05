import React from 'react';

export default function Four() {
  return (
    <section
      style={{
        backgroundColor: '#f0fae6',
        padding: '64px 16px',
        width: '100%',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '1.875rem',
            fontWeight: 'bold',
            marginBottom: '64px',
            color: '#333',
          }}
        >
          รีวิวจากสมาชิกผู้ใช้งานระบบ
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}
        >
          {/* Testimonial 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
            <div
              style={{
                color: '#7ac142',
                fontSize: '3.75rem',
                fontFamily: 'serif',
                lineHeight: '1',
                marginBottom: '8px',
              }}
            >
              “
            </div>
            <p
              style={{
                color: '#333',
                lineHeight: '1.7',
                flexGrow: 1,
                marginBottom: '16px',
              }}
            >
              ระบบดีมากเลยค่ะ ตอบโจทย์เรื่องการยืนยันตัวตน สร้างความน่าเชื่อถือให้ลูกค้าไว้ใจ หมดปัญหาลูกค้าถามรายละเอียดเรา
              แล้วไปจองกับมือาชีพเลยค่ะ
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginRight: '12px',
                  backgroundColor: '#ddd',
                  flexShrink: 0,
                }}
              >
                <img
                  // --- ใส่ PATH หรือ URL ของรูปโปรไฟล์ที่ 1 ตรงนี้ ---
                  src="/images/four/12.jpg" // <--- แก้ไขตรงนี้
                  alt="พูลวิลล่าพัทยา Pool villa พัทเมือง"
                  width={48}
                  height={48}
                  style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                  }}
                />
              </div>
              <div>
                <p style={{ fontWeight: '500', margin: 0, color: '#333' }}>พูลวิลล่าพัทยา Pool villa พัทเมือง</p>
                <p style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>นายหน้าพูลวิลล่ารายวัน</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
             <div
              style={{
                color: '#7ac142',
                fontSize: '3.75rem',
                fontFamily: 'serif',
                lineHeight: '1',
                marginBottom: '8px',
              }}
            >
              “
            </div>
            <p
              style={{
                color: '#333',
                lineHeight: '1.7',
                flexGrow: 1,
                marginBottom: '16px',
              }}
            >
              อุ่นใจขึ้นเยอะเลยค่ะ เราไม่ได้สร้างโปรไฟล์เก่งแบบนายหน้า แต่บ้านเราบ้านจริง ลูกค้า ได้บ้านจริง ลูกค้าแคปหน้าจอบ้านลงกลุ่ม
              ก็ไม่ต้องมีใครไปแตะคิด เพราะคนรู้จักน้อย เว็บตอบโจทย์เลยค่ะ
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginRight: '12px',
                  backgroundColor: '#ddd',
                  flexShrink: 0,
                }}
              >
                <img
                  // --- ใส่ PATH หรือ URL ของรูปโปรไฟล์ที่ 2 ตรงนี้ ---
                  src="/images/four/11.jpg" // <--- แก้ไขตรงนี้
                  alt="นันทินทน์ รักษา"
                  width={48}
                  height={48}
                   style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                  }}
                />
              </div>
              <div>
                <p style={{ fontWeight: '500', margin: 0, color: '#333' }}>นันทินทน์ รักษา</p>
                <p style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>เจ้าของบ้านพูลวิลล่าพัทยา</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}