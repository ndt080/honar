import { cn } from '@shared/utils';
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { useIntersection } from 'react-use';

export interface InfinityLoaderInstance {
  complete(): void;

  loaded(): void;

  reset(): void;
}

export type LoadingState = 'active' | 'loading' | 'complete';

export interface InfinityLoaderProps {
  loader?: React.ReactNode;
  distance?: number;
  onLoad?: (instance: InfinityLoaderInstance) => void;
}

function InfinityLoader({
  loader,
  children,
  distance = 238,
  onLoad,
}: PropsWithChildren<InfinityLoaderProps>) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef<HTMLElement | null>(null);

  const [state, setState] = useState<LoadingState>('active');
  const [isTriggerVisible, setIsTriggerVisible] = useState(false);

  const intersection = useIntersection(triggerRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  useEffect(() => {
    setIsTriggerVisible(Boolean(intersection?.isIntersecting));
  }, [intersection?.isIntersecting]);

  const updateState = (newState: LoadingState) => {
    setState(newState);
  };

  const asyncUpdateState = (newState: LoadingState) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => updateState(newState));
    });
  };

  const onComplete = () => {
    asyncUpdateState('complete');
  };

  const onLoaded = () => {
    asyncUpdateState('active');
  };

  const onActive = () => {
    if (!triggerRef.current || !scrollRef.current || !contentRef.current) {
      return;
    }

    if (!isTriggerVisible) {
      return;
    }

    const { scrollHeight } = scrollRef.current;
    const { scrollHeight: contentHeight } = contentRef.current;
    const { scrollHeight: triggerHeight } = triggerRef.current;

    if (triggerHeight + contentHeight <= scrollHeight || !contentHeight) {
      onLoad?.(loaderInstance);
      updateState('loading');
    }
  };

  const onStateChanged = () => {
    if (state === 'complete') {
      return;
    }

    if (state === 'loading') {
      return;
    }

    if (state === 'active') {
      return onActive();
    }
  };

  const loaderInstance = {
    complete: onComplete,
    loaded: onLoaded,
    reset: onLoaded,
  } as InfinityLoaderInstance;

  useEffect(() => {
    scrollRef.current = triggerRef.current?.parentElement as HTMLElement;
    contentRef.current = triggerRef.current?.parentNode?.firstElementChild as HTMLElement;
    requestAnimationFrame(onActive);
  }, [triggerRef]);

  useEffect(() => {
    onStateChanged();
  }, [state, isTriggerVisible]);

  return (
    <div
      ref={triggerRef}
      className={cn(state, 'infinity-loader-trigger')}
      style={{ height: distance }}
    >
      {loader && !(state === 'complete') ? loader : null}
      {children}
    </div>
  );
}

export default InfinityLoader;