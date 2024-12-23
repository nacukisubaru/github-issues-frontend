import { fetchIssues } from "entities/issues";
import { FC, useEffect } from "react";

import { useAppDispatch } from "shared/lib/store";
export const GithubIssues: FC = function GithubIssues() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    const fetch = async () => {
      dispatch(fetchIssues({user: 'airbnb', repo: 'javascript', page: 1}));
    }
    fetch();
  }, []);
  
  return (<></>);
}
