import isEqual from 'react-fast-compare';

export const areEqual = <T>(prevProps: T, nextProps: T) => {
  return isEqual(prevProps, nextProps);
};
