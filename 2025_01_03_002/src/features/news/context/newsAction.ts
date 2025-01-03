import { Category, News } from "../components/types/Types";

const ADD_NEWS = "ADD_NEWS";
export const addNews = (news: News) => ({
  type: ADD_NEWS as Category,
  payload: news,
});

const DELETE_NEWS = "DELETE_NEWS";
export const deleteNews = (id: number) => ({
  type: DELETE_NEWS as Category,
  payload: id,
});
