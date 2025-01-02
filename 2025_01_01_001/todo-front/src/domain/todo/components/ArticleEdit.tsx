import { FC, memo, FormEvent } from "react";
import { Article } from "../types";

interface Props {
  articleList: Article[];
}

const TaskEdit: FC<Props> = () => {
  return <>zEdit</>;
};

export const MemoArticleEdit = memo(TaskEdit);
