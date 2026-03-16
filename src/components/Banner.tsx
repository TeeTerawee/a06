import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        src="/img/banner.jpg"
        alt="banner"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
