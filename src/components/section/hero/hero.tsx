import VerticalCard from "../../ui/card/card-vertical";
import { latestNews } from "../../../constants";
import styles from "./hero.module.scss";
import HorizontalCard from "../../ui/card/card-horizontal";

export default function Hero() {
   return (
      <div className={styles.heroContainer}>
         <div className={styles.hero}>
            <VerticalCard
               title="David Marcus, The Latest Top Executive To Leave Meta"
               imageUrl="/assets/1.png"
               content="Welcome to the Cryptomedia News  and Media ! The resourde is designed to help you to understand more about how the Cryptomedia works to enrich the students. This resource is designed to help you to understand more"
               time="2 hours ago"
            />
         </div>
         <div className={styles.latestNews}>
            <h3>Todays Latest News</h3>
            <div className={styles.latestNewsContainer}>
               {latestNews.map((news, index) => (
                  <HorizontalCard
                     key={index}
                     imageUrl={news.imageUrl}
                     author={news.author}
                     content={news.content}
                     time={news.time}
                     showHeading={false}
                     showButton={false}
                     showDivider={index !== latestNews.length - 1}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}
