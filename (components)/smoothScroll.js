import { useEffect, useRef } from 'react';
import { Scrollbar } from 'smooth-scrollbar-react';

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollbar = containerRef.current.scrollbar;

    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <Scrollbar ref={containerRef} damping={0.2}>
      {children}
    </Scrollbar>
  );
};

export default SmoothScroll;