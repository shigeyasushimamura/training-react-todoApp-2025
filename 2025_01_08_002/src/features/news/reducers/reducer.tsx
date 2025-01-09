import React, { createContext, FC, useContext, useReducer } from "react";
import { News } from "../types/type";
import { ADD_NEWS, DELETE_NEWS } from "./action";

interface NewsState {
  newsList: News[];
}

interface NewsAtion {
  type: string;
  payload: News | number;
}

const newsReducer = (state: NewsState, action: NewsAtion): NewsState => {
  switch (action.type) {
    case ADD_NEWS:
      return {
        ...state,
        newsList: [...state.newsList, action.payload as News],
      };
    case DELETE_NEWS:
      return {
        ...state,
        newsList: state.newsList.filter((n) => n.id !== action.payload),
      };
    default:
      return state;
  }
};

const newsContext = createContext<{
  state: NewsState;
  dispatch: React.Dispatch<NewsAtion>;
} | null>(null);

export const useNewsContext = () => {
  const cx = useContext(newsContext);

  if (!cx) throw new Error("error");
  return cx;
};

interface Props {
  children: React.ReactNode;
}

const array = [
  {
    id: 1,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    body: "開催！",
  },
  {
    id: 2,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "雑談",
    body: "開催！",
  },
  {
    id: 3,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    body: "開催！",
  },
  {
    id: 4,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "大切なお知らせ",
    body: "開催！",
  },
  {
    id: 5,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    body: "開催！",
  },
  {
    id: 6,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "雑談",
    body: "開催！",
  },
  {
    id: 7,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    body: "開催！",
  },
];

const initState = {
  newsList: [],
};

export const NewsProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(newsReducer, initState);

  return (
    <newsContext.Provider value={{ state, dispatch }}>
      {children}
    </newsContext.Provider>
  );
};
