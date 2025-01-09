import { News } from "../types/type";

export const ADD_NEWS = "ADD_NEWS";
export const addNews = (news: News) => ({
  type: ADD_NEWS,
  payload: news,
});

export const DELETE_NEWS = "DELETE_NEWS";
export const deleteNews = (id: number) => ({
  type: DELETE_NEWS,
  payload: id,
});
