import Button from "../button/button";
import Divider from "../divider/divider";
import styles from "./card.module.scss";

export default function HorizontalCard(props: HorizontalCardProps) {
   const {
      imageUrl,
      title,
      content,
      time,
      author,
      showButton = true,
      showHeading = true,
      showDivider = true,
      blogCard = false,
   } = props;
   return (
      <div
         className={` ${styles.horizontalCard} ${
            blogCard ? styles.blogCard : ""
         }`}
      >
         <img src={imageUrl} alt="" className={styles.image} />

         <div className={styles.cardContent}>
            {author && <div className={styles.author}>{author}</div>}
            {showHeading && <h3 className={styles.heading}>{title}</h3>}
            <p className={styles.content}>{content}</p>
            {time && !blogCard && <div className={styles.time}>{time}</div>}
            {showButton && <Button title="Read More" />}
            {showDivider && <Divider />}
         </div>
         {blogCard && <div className={styles.time}>{time}</div>}
      </div>
   );
}
