import { addNews } from "../reducers/action";
import { useNewsContext } from "../reducers/reducer";
import { News } from "../types/type";

export const useNewsActionDispatch = () => {
  const { state, dispatch } = useNewsContext();

  const addNewsDispatch = (news: News) => {
    console.log("addnews dispatcheed");
    dispatch(addNews(news));
  };

  return { addNewsDispatch };
};
