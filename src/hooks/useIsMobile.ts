import { useState, useEffect } from 'react';

export function useIsMobile(breakpoint: number = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < breakpoint);
    
    // Check on mount
    checkScreen();
    
    // Add event listener
    window.addEventListener("resize", checkScreen);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkScreen);
  }, [breakpoint]);

  return isMobile;
}
