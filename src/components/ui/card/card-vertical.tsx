import Button from "../button/button";
import styles from "./card.module.scss";

export default function VerticalCard(props: VerticalCardProps) {
   const { imageUrl, title, content, time } = props;
   return (
      <div className={styles.cardContainer}>
         <h2 className={styles.heading}>{title}</h2>
         <img src={imageUrl} alt="" className={styles.image} />
         <p className={styles.content}>{content}</p>

         {time && <div className={styles.time}>{time}</div>}
         <div className={styles.button}>
            <Button title="Read More" />
         </div>
      </div>
   );
}
