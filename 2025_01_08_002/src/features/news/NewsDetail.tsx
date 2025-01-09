import { useParams } from "react-router-dom";
import { News } from "./types/type";
import { FC, useEffect, useState } from "react";
import styles from "./News.module.css";
interface Props {
  newsList: News[];
}

const NewsDetail: FC<Props> = ({ newsList }) => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<News | null>(null);

  useEffect(() => {
    if (!id || isNaN(Number(id))) {
      return;
    }
    const tmp = newsList.find((n) => n.id === Number(id));
    setData(tmp ?? null);
  }, [id, newsList]);

  return (
    <div className={styles["news-detail"]}>
      <h1 className={styles["news-detail__heading"]}>ニュース詳細</h1>
      {data && (
        <article className={styles["news-detail__item"]}>
          <header className={styles["news-detail_item-heading"]}>
            <h3> {data.title}</h3>
          </header>
          <div className={styles["news-detail__field"]}>
            <img src={data.path} className={styles["news-detail__image"]}></img>
          </div>
          <div className={styles["news-detail_field"]}>
            <p className={styles["news-detail__p"]}>{data.body}</p>
          </div>
        </article>
      )}
    </div>
  );
};

export default NewsDetail;
