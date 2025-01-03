import { useContext } from "react";
import { NewsAction, NewsContext, NewsState } from "../context/newsContext";

const UseNewsState = (): {
  state: NewsState;
  dispatch: React.Dispatch<NewsAction>;
} => {
  const { state, dispatch } = useContext(NewsContext);
  return { state, dispatch };
};

export default UseNewsState;
