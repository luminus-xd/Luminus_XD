import { useEffect, useState } from 'react';

type MediaQueryList = {
  matches: boolean;
  addListener: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => any) => void;
  removeListener: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => any) => void;
};

/**
 * matchMediaをReactで使えるようにしたカスタムフック
 * @param query MediaQuery
 * @returns
 */
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    let media: MediaQueryList;

    if (typeof window !== 'undefined') {
      media = window.matchMedia(query);
    } else {
      media = { matches: false, addListener: () => {}, removeListener: () => {} };
    }

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
