import { createGlobalStyle } from "styled-components";
import imageHeader from "/src/assets/image/Снимок экрана 2024-11-21 000731-Photoroom.png";
export default function Header() {
  return (
    <div>
      <GlobalHeaderStyle />
      <img className="imageHeader" src={imageHeader} />
      <div className="headerDiv">
        <b>serik kamytov</b>
        <img
          className="img"
          src="https://music-bandlink.s3.yandex.net/guardian-static/img/verified-blue.svg"
        />
      </div>
    </div>
  );
}
const GlobalHeaderStyle = createGlobalStyle`
  .imageHeader {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
    .headerDiv {
    background-color: #3b3b3b;
    color: #ffff;
    display: flex;
    align-items: center;
    height: 50px;
    padding-left: 10px;
    width: 100%;
    .img {
      width: 25px;
    }
  }
`;
