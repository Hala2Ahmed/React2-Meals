import React from "react";
import style from "./Footer.module.scss";
import { Link } from "react-router-dom";
import img from "../../assets/image.png/";
export default function Footer() {
  return (
    <div className={style.footer}>
      <div>
        <div className={style.content}>
          <Link className={style.link} to="/">
            <img src={img} alt="logo" />
            <span>Recipe</span>
          </Link>
          <span className={style.route}>Route</span>
        </div>
        <hr />
        <span className={style.copyright}>
          © 2025 Nagy Osama™ . All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
