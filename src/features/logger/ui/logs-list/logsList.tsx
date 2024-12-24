import { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { useAppDispatch, useAppSelector } from "shared/lib/store";
import { LogsItem } from "./logsItem";
import { fetchLogs } from "features/logger/model/logsThunk";
import { selectLogs } from "features/logger/model/selector";

export function LogsList() {
  const logs = useAppSelector(selectLogs);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const getNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    dispatch(fetchLogs({ page: page + 1 }));
  };

  useEffect(() => {
    dispatch(fetchLogs({ page: 1 }));
  }, []);


  return (
    <>
      {logs.map(log => 
        <LogsItem {...log} />
      )}

      {logs.length > 0 && (
        <InView
          as="div"
          style={{ padding: '2px' }}
          onChange={(inView, _) => inView && getNextPage()}
        />
      )}
    </>
  );
}