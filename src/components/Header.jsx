import React from "react";
import imageHeader from '/src/assets/image/Снимок экрана 2024-11-21 000731-Photoroom.png'
export default function Header() {
  return (
    <div>
      <img
        class="imageHeader"
        src={imageHeader}
      />
      <div className="headerDiv">
        <b>serik kamytov</b>
        <img
          class="img"
          src="https://music-bandlink.s3.yandex.net/guardian-static/img/verified-blue.svg"
        />
      </div>
    </div>
  );
}
