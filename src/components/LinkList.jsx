import { createGlobalStyle } from "styled-components";
import { Link } from "../utils/constants/link";

export default function LinkList() {
  return (
    <div>
      <StyleGlobal />
      {Link.map((item) => (
        <div key={item.id}>
          <div className="div">
            <a className="link" href={item.url}>
              <img className="img2" src={item.image} />
              {item.title}
            </a>
            <a className="link" href={item.url}>
              <button className="btnOpen">открыть</button>
            </a>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
const StyleGlobal = createGlobalStyle`
  .aza {
    width: 100%;
  }
  .div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .link {
    text-decoration: none;
    color: #ffff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin: 20px 0 20px 10px;
  }
  .btnOpen {
    right: 50px;
    background-color: red;
    color: #ffff;
    padding: 15px;
    border-radius: 15px;
    border: 0px;
    margin-right: 20px;
  }
  .img2 {
    width: 50px;
    margin-right: 20px;
  }
  body {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-family: "Raleway", sans-serif;
    background-image: url(https://cdn.stocksnap.io/img-thumbs/280h/colorful-bokeh_2END49TZPS.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .continer {
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    background-color: black;
  }
    @media (max-width: 480px) {
  .link {
    text-decoration: none;
    color: #ffff;
    font-size: 1.5;
    display: flex;
    align-items: center;
    margin: 20px 0 20px 10px;
  }
  }
`;
