import React from "react";
import { Spinner } from "@heroui/react";
import style from "./Loading.module.scss";

export default function LoadingScreen() {
  return (
    <div className={style.loading}>
      <Spinner color="warning" size="lg" />
    </div>
  );
}
