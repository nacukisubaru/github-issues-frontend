import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { fetchLogs } from 'features/logger/model/logsThunk';
import { selectLogs } from 'features/logger/model/selector';
import { InView } from 'react-intersection-observer';
import { FixedSizeList as List } from 'react-window';
import { clearLogs } from 'features/logger';
import { LogsItem } from './logsItem';

export function LogsList() {
  const logs = useAppSelector(selectLogs);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const listRef = useRef<HTMLDivElement | null>(null);
  const [listHeight, setListHeight] = useState<number>(0);

  const getNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    dispatch(fetchLogs({ page: page + 1 }));
  };

  useEffect(() => {
    dispatch(fetchLogs({ page: 1 }));
    return () => {
      dispatch(clearLogs());
    };
  }, [dispatch]);

  useEffect(() => {
    if (listRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          setListHeight(entry.contentRect.height);
        });
      });

      resizeObserver.observe(listRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }

    return undefined;
  }, []);

  const renderRow = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => (
    <InView
      as="div"
      style={style}
      onChange={(inView, _) => {
        if (inView && index === logs.length - 1 && listHeight >= 780) {
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
    <div ref={listRef}>
      {logs.length > 0 && (
        <List height={780} itemCount={logs.length} itemSize={200} width="100%">
          {renderRow}
        </List>
      )}
    </div>
  );
}
