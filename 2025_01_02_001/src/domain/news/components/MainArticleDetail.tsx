import { Article } from "../types/Types";
import { useEffect, useState } from "react";
import { FC } from "react";
import { useParams } from "react-router-dom";

interface Props {
  articleList: Article[];
}

const MainArticleDetail: FC<Props> = ({ articleList }) => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  const findArticleById = (id: number) => {
    return articleList.find((a) => a.id === id);
  };

  useEffect(() => {
    if (!id || isNaN(Number(id))) {
      console.error("IDが指定されていません");
      return;
    }

    const data = findArticleById(Number(id));
    if (data) {
      setArticle(data);
    }
  }, [id]);

  console.log(article, id);
  console.log(articleList);
  if (!article) <div>対象の記事が見つかりません...</div>;

  return (
    <>
      <div>
        <h1>詳細画面</h1>
        <article>
          {article?.title}
          {article?.category}
          {article?.content}
        </article>
      </div>
    </>
  );
};

export default MainArticleDetail;
