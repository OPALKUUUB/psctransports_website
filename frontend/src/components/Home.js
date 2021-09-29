import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="head">
          <h1>Welcome to PSC web page</h1>
        </div>
        <div className="body">
          <div className="left">
            <h3 className="left-head">บริษัทเราทำอะไร</h3>
            <p className="left-body">
              บริการรถ 6 ล้อ 10 ล้อ ขนส่งตู้คอนเทนเนอร์ ทุกจังหวัดทั่วไทย
              ไม่ว่าจะเป็นการนำเข้าตู้คอนเทนเนอร์จากท่าเรือแหลมฉบังไปเปิดที่โรงงาน
              การส่งออกตู้คอนเทนเนอร์จากโรงงานไปท่าเรือ
            </p>
            <h3 className="left-head">สิ่งที่คุณจะได้รับ</h3>
            <p className="left-body">
              การขนส่งสินค้าที่ รวดเร็ว ปลอดภัย
              เราสามารถให้ความมั่นใจกับบริการของเรา
              ด้วยประสบการณ์ในการดำเนินกิจการที่มากกว่า 10 ปี รถทุกคันมี GPS และ
              คนขับที่มีประสิทธิภาพ
            </p>
          </div>
          <div className="right-body">
            <img src="/image/home1.jpg" alt="" />
            <img src="/image/home2.jpg" alt="" />
            <img src="/image/home3.jpg" alt="" />
            <img src="/image/home4_resize.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
