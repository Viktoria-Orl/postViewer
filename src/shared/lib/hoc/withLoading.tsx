import type { FC } from "react";
import styles from './withLoading.module.css';

type WithLoadingProps = {
  isLoading: boolean;
};

export const withLoading = <P extends object>(
  WrappedComponent: FC<P>
): FC<P & WithLoadingProps> => {
  return function WithLoadingComponent({
    isLoading,
    ...props
  }: WithLoadingProps & P) {
    if (isLoading) {
      return <div className={styles.loadingWrapper}>Loading...</div>;
    }
    return <WrappedComponent {...(props as P)} />;
  };
};
