import { NewsAction, NewsState } from "./newsContext";
import { News } from "../components/types/Types";

export const NewsReducer = (state: NewsState, action: NewsAction) => {
  switch (action.type) {
    case "ADD_NEWS":
      return {
        ...state,
        newsList: [...state.newsList, action.payload as News],
      };
    case "DELETE_NEWS":
      return {
        ...state,
        newsList: state.newsList.filter((n) => action.payload !== n.id),
      };
    default:
      return state;
  }
};
