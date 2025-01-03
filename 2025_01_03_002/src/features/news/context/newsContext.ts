import { createContext, useContext } from "react";
import { News } from "../components/types/Types";
const array: News[] = [
  {
    id: 1,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    content: "開催！",
  },
  {
    id: 2,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "雑談",
    content: "開催！",
  },
  {
    id: 3,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    content: "開催！",
  },
  {
    id: 4,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "大切なお知らせ",
    content: "開催！",
  },
  {
    id: 5,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    content: "開催！",
  },
  {
    id: 6,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "雑談",
    content: "開催！",
  },
  {
    id: 7,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    content: "開催！",
  },
];

export interface NewsState {
  newsList: News[];
}

export interface NewsAction {
  type: string;
  payload: News | number;
}

export const initialState: NewsState = {
  newsList: [],
};

export const NewsContext = createContext<{
  state: NewsState;
  dispatch: React.Dispatch<NewsAction>;
}>(
  {} as {
    state: NewsState;
    dispatch: React.Dispatch<NewsAction>;
  }
);

export const useNewsContext = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNewsContext must be used within a provider");
  }
  return context;
};
