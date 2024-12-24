import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { fetchLogs } from 'features/logger/model/logsThunk';
import { selectLogs } from 'features/logger/model/selector';
import { LogsItem } from './logsItem';
import { FixedSizeList as List } from 'react-window';
import { InView } from 'react-intersection-observer';

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
  }, [dispatch]);

  const renderRow = ({ index, style }: {
    index: number;
    style: React.CSSProperties;
  }) => (
    <InView
      as="div"
      style={style}
      onChange={(inView, _) => {
        if (inView && index === logs.length - 1) {
          getNextPage();
        }
      }}
    >
      <div className="mb-5">
        <LogsItem
          ip={logs[index].ip}
          method={logs[index].method}
          path={logs[index].path}
          timestamp={logs[index].timestamp}
        />
      </div>
    </InView>
  );

  return (
    <>
      {logs.length > 0 && (
        <List
          height={780}
          itemCount={logs.length}
          itemSize={200}
          width="100%"
        >
          {renderRow}
        </List>
      )}
    </>
  );
}
