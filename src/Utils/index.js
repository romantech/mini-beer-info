import { Modal } from 'antd';

// 맥주 리스트 ABV 데이터 필터
export const filterDataByAbv = (selectedRange, data, abvRange) => {
  if (selectedRange.length === 0) {
    return data;
  }
  return selectedRange.reduce((acc, cur) => {
    const {
      range: [fromRange, toRange],
    } = abvRange[cur];
    return acc.concat(
      data?.filter(({ abv }) => !!(fromRange <= abv && toRange >= abv)),
    );
  }, []);
};

export const getTableOptions = styles => {
  const defaultOptions = {
    headerStyle: styles?.headerStyle ?? {
      backgroundColor: '#1890FF',
      color: '#FFF',
      fontSize: '1rem',
    },
    pageSize: styles?.pageSize ?? 6,
    pageSizeOptions: styles?.pageSizeOptions ?? [6, 10, 15],
  };
  return defaultOptions;
};

export const showInfoModal = options => {
  Modal.info({
    ...options,
    onOk() {},
  });
};

export const showAutoCloseModal = options => {
  let secondsToGo = 2;
  const modal = Modal.info({
    ...options,
    content: options.content + ` ${secondsToGo}후에 창이 닫힙니다`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: options.content + ` ${secondsToGo}후에 창이 닫힙니다`,
    });
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
};
