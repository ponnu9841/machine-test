import React from "react";
import { Arrow } from "../../../assets/arrow";
import styles from "./button.module.scss";

export default function Button({ title }: { title: string }) {
   return (
      <button className={styles.button}>
         {title} <Arrow />
      </button>
   );
}
