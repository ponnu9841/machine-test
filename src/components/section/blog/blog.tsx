import { blogData } from "../../../constants";
import HorizontalCard from "../../ui/card/card-horizontal";
import styles from "./blog.module.scss";

export default function Blog() {
   return (
      <div className={styles.blogContainer}>
         {blogData.map((blog, index) => (
            <HorizontalCard
               {...blog}
               key={index}
               showDivider={false}
               blogCard
            />
         ))}
      </div>
   );
}
